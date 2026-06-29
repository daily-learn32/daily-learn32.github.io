// === DOM Elements ===
const calculateButton = document.querySelector(".calculate-button");
const skillInputs = document.querySelectorAll(".skill-input");
const scoreEl = document.querySelector(".score");
const statusEl = document.querySelector(".status");
const descriptionEl = document.querySelector(".status-description");

// === Functions ===

/**
 * Menghitung skor rata-rata dari semua input skill.
 * @returns {number} Skor rata-rata yang dibulatkan.
 */
function calculateAverageScore() {
  let totalScore = 0;
  skillInputs.forEach((input) => {
    let value = parseInt(input.value) || 0;
    // Validasi nilai agar berada di antara 0 dan 100
    if (value > 100) value = 100;
    if (value < 0) value = 0;
    input.value = value; // Memperbarui input jika nilainya di luar rentang
    totalScore += value;
  });
  return Math.round(totalScore / skillInputs.length);
}

/**
 * Mendapatkan status dan deskripsi berdasarkan skor.
 * @param {number} score - Skor rata-rata.
 * @returns {{status: string, description: string}} Objek berisi status dan deskripsi.
 */
function getStatusInfo(score) {
  if (score <= 40) {
    return {
      status: "Bad",
      description:
        "Your score is lower than average. Keep practicing to improve your skills.",
    };
  } else if (score <= 70) {
    return {
      status: "Good",
      description:
        "You have a solid foundation and scored similarly to many other participants.",
    };
  } else if (score <= 88) {
    return {
      status: "Great",
      description:
        "You scored higher than 65% of the people who have taken these tests.",
    };
  } else {
    return {
      status: "Excellent",
      description:
        "Your performance is outstanding! You are in the top percentile of participants.",
    };
  }
}

/**
 * Handler untuk event klik pada tombol kalkulasi.
 */
function handleCalculateClick() {
  const averageScore = calculateAverageScore();
  const { status, description } = getStatusInfo(averageScore);

  scoreEl.textContent = averageScore;
  statusEl.textContent = status;
  descriptionEl.textContent = description;

  // Jika dalam tampilan mobile, scroll ke atas ke bagian hasil
  if (window.innerWidth <= 640) {
    const leftSide = document.querySelector(".left-side");
    leftSide.scrollIntoView({ behavior: "smooth" });
  }
}

// === Initialization ===
document.addEventListener("DOMContentLoaded", handleCalculateClick);
calculateButton.addEventListener("click", handleCalculateClick);
