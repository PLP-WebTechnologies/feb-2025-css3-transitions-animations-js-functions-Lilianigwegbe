// Function to trigger animation
const animateBtn = document.getElementById("animateBtn");
animateBtn.addEventListener("click", () => {
  animateBtn.classList.add("animate");
  setTimeout(() => animateBtn.classList.remove("animate"), 500);
});

// Function to store user preference
const savePrefBtn = document.getElementById("savePrefBtn");
savePrefBtn.addEventListener("click", () => {
  const favoriteColor = prompt("Enter your favorite background color (e.g., lightblue):");
  if (favoriteColor) {
    localStorage.setItem("bgColor", favoriteColor);
    document.body.style.backgroundColor = favoriteColor;
  }
});

// Load user preference on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedColor = localStorage.getItem("bgColor");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
  }
});
