function openLetter() {
  document.querySelector(".left-fold").style.transform = "rotateY(-120deg)";
  document.querySelector(".right-fold").style.transform = "rotateY(120deg)";
  document.querySelector(".heart-button").style.display = "none";
  document.querySelector(".letter-content").classList.add("open");
}


window.onload = () => {
  openLetter();
};


window.addEventListener("DOMContentLoaded", () => {
    const heartBtn = document.getElementById("heartButton");
    if (heartBtn) {
        setTimeout(() => {
            heartBtn.style.display = "none";
        }, 5000);
    }

    // Floating heart generator
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "vw";
        heart.textContent = "💖";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }, 500);
});


window.addEventListener("DOMContentLoaded", () => {
    const leftCover = document.querySelector(".cover.left");
    const rightCover = document.querySelector(".cover.right");

    setTimeout(() => {
        if (leftCover) leftCover.classList.add("open");
        if (rightCover) rightCover.classList.add("open");
    }, 1000);
});
