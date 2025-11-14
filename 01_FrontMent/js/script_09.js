document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");
  const inputs = {
    fname: {
      element: document.getElementById("fname"),
      validator: (value) => value.trim() !== "",
    },
    lname: {
      element: document.getElementById("lname"),
      validator: (value) => value.trim() !== "",
    },
    email: {
      element: document.getElementById("email"),
      validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    },
    password: {
      element: document.getElementById("password"),
      validator: (value) => value.trim() !== "",
    },
  };

  /**
   * Menampilkan atau menyembunyikan status error untuk sebuah input field.
   * @param {HTMLElement} inputElement - Elemen input.
   * @param {boolean} showError - True untuk menampilkan error, false untuk menyembunyikan.
   */
  const toggleError = (inputElement, showError) => {
    const field = inputElement.closest(".signup-form__field");
    if (showError) {
      field.classList.add("error");
    } else {
      field.classList.remove("error");
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isFormValid = true;

    // Validasi setiap input
    Object.values(inputs).forEach(({ element, validator }) => {
      const isValid = validator(element.value);
      toggleError(element, !isValid);
      if (!isValid) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });

  // Menghilangkan error saat pengguna mulai mengetik
  Object.values(inputs).forEach(({ element }) => {
    element.addEventListener("input", () => toggleError(element, false));
  });
});
