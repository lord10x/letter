
function openLetter() {
  const letter = document.getElementById("letter");
  letter.style.transform = "scaleX(1)";

  createHeartBurst();
  startHeartRain();
}

function createHeartBurst() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "burst-heart";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = Math.random() * 100 + "%";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
}

function startHeartRain() {
  let count = 0;
  const interval = setInterval(() => {
    if (count >= 30) return clearInterval(interval);
    const heart = document.createElement("div");
    heart.className = "rain-heart";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
    count++;
  }, 100);
}
