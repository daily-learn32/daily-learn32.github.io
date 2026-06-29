document.addEventListener("DOMContentLoaded", () => {
  const cardFlipper = document.querySelector(".card-flipper");
  const form = document.querySelector(".rating-card__form");
  const ratingItems = document.querySelectorAll(".rating-card__rating-item");
  const selectedRatingSpan = document.getElementById("selected-rating");
  const resetButton = document.querySelector(".thank-you-card__reset-button");

  let selectedValue = null;

  // Menangani klik pada item penilaian
  ratingItems.forEach((item, itemIdx) => {
    item.addEventListener("click", () => {
      console.log("KLIK");
      // Hapus kelas 'active' dari semua item
      ratingItems.forEach((obj) => obj.classList.remove("active"));
      // Tambahkan kelas 'active' ke item yang diklik
      ratingItems.forEach((obj, objIdx) => {
        if (objIdx <= itemIdx) {
          obj.classList.add("active");
        }
      });
      // Simpan nilai yang dipilih
      selectedValue = item.dataset.value;
    });
  });

  // Menangani pengiriman form
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Jika tidak ada nilai yang dipilih, jangan lakukan apa-apa
    if (!selectedValue) {
      alert("Please select a rating before submitting.");
      return;
    }

    // Tampilkan nilai yang dipilih di kartu belakang
    if (selectedValue) {
      selectedRatingSpan.textContent = selectedValue;
    }

    // Putar kartu
    cardFlipper.classList.add("is-flipped");
  });

  // Menangani klik pada tombol reset
  resetButton.addEventListener("click", () => {
    cardFlipper.classList.remove("is-flipped");
    ratingItems.forEach((btn) => btn.classList.remove("active"));
    selectedValue = null;
  });
});
