// ✅ Optional: Floating hearts animation
window.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.textContent = "💖";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }, 500);
});
