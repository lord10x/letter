function openLetter() {
  document.querySelector(".left-fold").style.transform = "rotateY(-120deg)";
  document.querySelector(".right-fold").style.transform = "rotateY(120deg)";
  document.querySelector(".heart-button").style.display = "none";
  document.querySelector(".letter-content").classList.add("open");
}
