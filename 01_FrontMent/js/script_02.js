document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".container");
  const publishDateElement = document.querySelector(".today-date");

  if (card) {
    card.addEventListener("click", () => {
      // Menambahkan atau menghapus class 'is-flipped' untuk memicu animasi
      card.classList.toggle("is-flipped");
    });
  }

  // Mengatur tanggal publikasi ke hari ini
  if (publishDateElement) {
    const today = new Date();
    const day = today.getDate();
    const year = today.getFullYear();
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const month = monthNames[today.getMonth()];

    publishDateElement.textContent = `Today is ${day} ${month} ${year}`;
  }
});