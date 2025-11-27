document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const form = document.querySelector(".side-left");
  const clearBtn = document.querySelector(".side-left__header__button-reset");

  const amountInput = document.getElementById("mortgage-amount");
  const termInput = document.getElementById("mortgage-term");
  const rateInput = document.getElementById("interest-rate");
  const mortgageTypeInputs = document.querySelectorAll(
    'input[name="mortgage-type"]'
  );

  const sideRight = document.querySelector(".side-right");
  const monthlyRepaymentsEl = document.querySelector(".monthly-repayments");
  const sumRepaymentsEl = document.querySelector(".sum-repayments");
  const totalRepaymentTextEl = document.querySelector(".total-repayment-text");

  // Format number to currency
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  // --- FUNCTIONS ---

  const validateInput = (input) => {
    const parent = input.closest(".side-left__input1__child");
    const errorMsg = parent.querySelector(
      ".side-left__input1__child__error-msg"
    );
    const blockInput = parent.querySelector(
      ".side-left__input1__child__block-input"
    );

    if (input.value === "") {
      errorMsg.classList.add("show");
      blockInput.classList.add("error");
      return false;
    }
    errorMsg.classList.remove("show");
    blockInput.classList.remove("error");
    return true;
  };

  const validateRadio = () => {
    const parent = document.querySelector(".side-left__input2");
    const errorMsg = parent.querySelector(".side-left__input2__error-msg");
    let selected = false;
    mortgageTypeInputs.forEach((radio) => {
      if (radio.checked) selected = true;
    });

    if (!selected) {
      errorMsg.classList.add("show");
      return false;
    }
    errorMsg.classList.remove("show");
    return true;
  };

  const calculateRepayments = () => {
    const principal = parseFloat(amountInput.value.replace(/,/g, ""));
    const years = parseInt(termInput.value);
    const annualRate = parseFloat(rateInput.value);

    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = years * 12;
    const mortgageType = document.querySelector(
      'input[name="mortgage-type"]:checked'
    ).value;

    let monthlyPayment = 0;
    let totalPayment = 0;

    if (mortgageType === "repayment") {
      totalRepaymentTextEl.textContent = "Total you'll repay over the term";
      if (monthlyRate > 0) {
        monthlyPayment =
          (principal *
            monthlyRate *
            Math.pow(1 + monthlyRate, numberOfPayments)) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      } else {
        monthlyPayment = principal / numberOfPayments;
      }
      totalPayment = monthlyPayment * numberOfPayments;
    } else if (mortgageType === "interest-only") {
      totalRepaymentTextEl.textContent =
        "Total interest you'll pay over the term";
      monthlyPayment = principal * monthlyRate;
      totalPayment = monthlyPayment * numberOfPayments;
    }

    monthlyRepaymentsEl.textContent = currencyFormatter.format(monthlyPayment);
    sumRepaymentsEl.textContent = currencyFormatter.format(totalPayment);

    sideRight.classList.add("show-result");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isAmountValid = validateInput(amountInput);
    const isTermValid = validateInput(termInput);
    const isRateValid = validateInput(rateInput);
    const isTypeValid = validateRadio();

    if (isAmountValid && isTermValid && isRateValid && isTypeValid) {
      calculateRepayments();
    }
  };

  const clearForm = () => {
    form.reset();
    sideRight.classList.remove("show-result");
    document
      .querySelectorAll(".error")
      .forEach((el) => el.classList.remove("error"));
    document
      .querySelectorAll(".show")
      .forEach((el) => el.classList.remove("show"));
    document
      .querySelectorAll(".selected")
      .forEach((el) => el.classList.remove("selected"));
    monthlyRepaymentsEl.textContent = currencyFormatter.format(0);
    sumRepaymentsEl.textContent = currencyFormatter.format(0);
  };

  // --- EVENT LISTENERS ---

  form.addEventListener("submit", handleFormSubmit);
  clearBtn.addEventListener("click", clearForm);

  // Event listeners untuk efek visual (focus/blur) pada input
  [amountInput, termInput, rateInput].forEach((input) => {
    input.addEventListener("focus", (e) => {
      e.target
        .closest(".side-left__input1__child__block-input")
        .classList.add("focus");
    });

    input.addEventListener("blur", (e) => {
      e.target
        .closest(".side-left__input1__child__block-input")
        .classList.remove("focus");
    });
  });

  // Terapkan filter ke Mortgage Amount dan Interest Rate
  amountInput.addEventListener("input", (e) => {
    const input = e.target;
    // Hapus semua karakter non-digit (termasuk koma sebelumnya)
    const numericValue = input.value.replace(/[^0-9]/g, "");

    if (numericValue) {
      // Format angka dengan koma dan perbarui nilai input
      input.value = parseInt(numericValue, 10).toLocaleString("en-US");
    } else {
      input.value = "";
    }
  });
  rateInput.addEventListener("input", (e) => {
    const input = e.target;
    const originalValue = input.value;
    const sanitizedValue = originalValue.replace(/[^0-9.]/g, "");
    const parts = sanitizedValue.split(".");

    // Memastikan hanya ada satu titik desimal
    if (parts.length > 2) {
      input.value = parts[0] + "." + parts.slice(1).join("");
    } else {
      input.value = sanitizedValue;
    }
  });

  // Pastikan Mortgage Term hanya integer
  termInput.addEventListener("input", () => {
    termInput.value = termInput.value.replace(/[^0-9]/g, "");
  });

  mortgageTypeInputs.forEach((radio) => {
    radio.addEventListener("change", () => {
      validateRadio();
      document
        .querySelectorAll(".side-left__input2__block-input")
        .forEach((el) => el.classList.remove("selected"));
      if (radio.checked) {
        radio.parentElement.classList.add("selected");
      }
    });
  });
});
