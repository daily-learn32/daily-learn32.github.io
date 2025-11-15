document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const ratingCard = document.querySelector(".rating-card");
  const form = document.querySelector(".rating-card__form");
  const ratingItems = document.querySelectorAll(".rating-card__rating-item");

  let selectedValue = null;

  // Menangani klik pada item penilaian
  ratingItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Hapus kelas 'active' dari semua item
      ratingItems.forEach((btn) => btn.classList.remove("active"));
      // Tambahkan kelas 'active' ke item yang diklik
      item.classList.add("active");
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

    // Buat HTML untuk kartu "terima kasih"
    const thankYouCardHTML = `
      <div class="card thank-you-card">
        <img
          src="./images/illustration-thank-you.svg"
          alt="Thank you illustration"
          class="thank-you-card__hero"
        />
        <p class="thank-you-card__selection-result">
          You selected ${selectedValue} out of 5
        </p>
        <div class="thank-you-card__content">
          <h1 class="thank-you-card__title">Thank you!</h1>
          <p class="thank-you-card__description">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    `;

    // Ganti kartu penilaian dengan kartu "terima kasih"
    if (ratingCard) {
      container.innerHTML = thankYouCardHTML;
    }
  });
});