document.addEventListener("DOMContentLoaded", () => {
  // Elemen DOM
  const usedStorageEl = document.getElementById("used-storage");
  const totalStorageEl = document.getElementById("total-storage");
  const remainingStorageEl = document.getElementById("remaining-storage");
  const progressEl = document.querySelector(".storage-component__progress");
  const progressBarEl = document.querySelector(
    ".storage-component__progress-bar"
  );

  // Data (bisa didapat dari API di aplikasi nyata)
  const totalStorage = 1000; // dalam GB
  let usedStorage = 815; // dalam GB

  // Fungsi untuk update semua tampilan === ===
  function updateUI(currentUsedStorage) {
    // Kalkulasi
    const remainingStorage = totalStorage - currentUsedStorage;
    const usedPercentage = (currentUsedStorage / totalStorage) * 100;

    // Update Tampilan
    usedStorageEl.textContent = `${Math.round(currentUsedStorage)} GB`;
    totalStorageEl.textContent = `${totalStorage} GB`;
    remainingStorageEl.firstChild.textContent = Math.round(remainingStorage);

    // Update Progress Bar
    if (progressEl) {
      progressEl.style.width = `${usedPercentage}%`;
    }
  }

  // Inisialisasi tampilan awal
  updateUI(usedStorage);

  // Fungsi untuk menangani pergerakan (mouse & touch) === ===
  const handleDrag = (e) => {
    // Mencegah perilaku default seperti scroll saat menyeret di perangkat mobile
    if (e.type.startsWith("touch")) {
      e.preventDefault();
    }

    const rect = progressBarEl.getBoundingClientRect();
    // Dapatkan posisi X dari event mouse atau sentuhan pertama
    const clientX = e.type.startsWith("touch")
      ? e.touches[0].clientX
      : e.clientX;
    let offsetX = clientX - rect.left;

    // Batasi nilai offset agar tidak keluar dari progress bar
    offsetX = Math.max(0, Math.min(offsetX, rect.width));

    const newPercentage = (offsetX / rect.width) * 100;
    usedStorage = (newPercentage / 100) * totalStorage;
    updateUI(usedStorage);
  };

  // Fungsi untuk menghentikan aksi drag === ===
  const stopDrag = () => {
    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("touchmove", handleDrag);
    // Listener untuk mouseup dan touchend akan dihapus otomatis karena { once: true }
  };

  // Fungsi untuk memulai aksi drag === ===
  const startDrag = (e) => {
    handleDrag(e); // Langsung update saat pertama kali diklik/disentuh

    // Tambahkan listener untuk pergerakan
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("touchmove", handleDrag, { passive: false });

    // Tambahkan listener untuk berhenti (saat tombol mouse/jari diangkat)
    document.addEventListener("mouseup", stopDrag, { once: true });
    document.addEventListener("touchend", stopDrag, { once: true });
  };

  // Tambahkan event listener untuk memulai drag (baik via mouse atau sentuhan) === ===
  progressBarEl.addEventListener("mousedown", startDrag);
  progressBarEl.addEventListener("touchstart", startDrag, { passive: false });

  console.log("Cloud Storage component initialized.");
});
