document.addEventListener("DOMContentLoaded", () => {
  // Elemen-elemen untuk validasi email di footer
  const footerForm = document.querySelector(".footer__absolute-input");
  const emailInput = document.querySelector(
    ".footer__absolute-input__frame__input"
  );
  const submitBtn = document.querySelector(".footer__absolute-input__button");
  const messageEl = document.querySelector(
    ".footer__absolute-input__frame__message"
  );

  // Fungsi remove classI
  function removeClass() {
    footerForm.classList.remove("error");
    footerForm.classList.remove("correct");
  }

  // Fungsi untuk memvalidasi format email
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Event listener untuk tombol submit
  submitBtn.addEventListener("click", function () {
    const email = emailInput.value;

    // Hapus kelas status sebelumnya
    footerForm.classList.remove("correct");
    footerForm.classList.remove("error");

    if (!validateEmail(email)) {
      footerForm.classList.add("error");
      messageEl.textContent = "Invalid email address!";
    } else {
      footerForm.classList.add("correct");
      messageEl.textContent = "Successful.";
    }
  });

  // Event listener untuk input email (saat pengguna mengetik)
  emailInput.addEventListener("input", () => {
    removeClass();
  });

  // Penggilan awal
  removeClass();
});
