const menuToggle = document.querySelector(".toggleIcon");
const navLinks = document.querySelector(".ul1");
const hamburger = document.querySelector(".hamburger-icon");
const cross = document.querySelector(".cross-icon");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    hamburger.style.display = "none";
    cross.style.display = "block";
  } else {
    hamburger.style.display = "block";
    cross.style.display = "none";
  }
});
