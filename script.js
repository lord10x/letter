// Open the main folds of the letter
function openLetter() {
  const leftFold = document.querySelector(".left-fold");
  const rightFold = document.querySelector(".right-fold");
  const heartBtn = document.querySelector(".heart-button");

  if (leftFold) leftFold.style.transform = "rotateY(-120deg)";
  if (rightFold) rightFold.style.transform = "rotateY(120deg)";
  if (heartBtn) heartBtn.style.display = "none";

  document.querySelector(".letter-content")?.classList.add("open");
}

// When the page is fully loaded
window.onload = () => {
  openLetter();
};

// Floating hearts and hiding heart button with delay
window.addEventListener("DOMContentLoaded", () => {
  const heartBtn = document.getElementById("heartButton");
  if (heartBtn) {
    setTimeout(() => {
      heartBtn.style.display = "none";
    }, 5000);
  }

  // Floating heart animation
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.textContent = "💖";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }, 500);

  // Open the cover animation if present
  const leftCover = document.querySelector(".cover.left");
  const rightCover = document.querySelector(".cover.right");

  setTimeout(() => {
    if (leftCover) leftCover.classList.add("open");
    if (rightCover) rightCover.classList.add("open");
  }, 1000);
});
