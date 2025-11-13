document.addEventListener("DOMContentLoaded", () => {
  // Memilih semua elemen <details> di dalam menu accordion
  const allDetailsItems = document.querySelectorAll(
    ".content-card__accordion-item" // Ini adalah elemen <details>
  );

  allDetailsItems.forEach((details) => {
    // Menambahkan event listener 'toggle' yang merupakan event bawaan dari <details>
    details.addEventListener("toggle", () => {
      const icon = details.querySelector(".accordion-icon");
      // Memeriksa properti 'open' dari elemen <details>
      // Jika terbuka, ganti ikon menjadi 'minus', jika tidak, ganti menjadi 'plus'
      icon.classList.toggle("fa-minus", details.open);
      icon.classList.toggle("fa-plus", !details.open);
    });
  });
});
