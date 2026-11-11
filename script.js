var menu = document.querySelector(".ul1");
var hamburger = document.querySelector(".hamburger-icon");
var cross = document.querySelector(".cross-icon");
var menuState = "closed";

function toggleMenu() {
    if (menuState === "closed") {

        menu.classList.add("open");
        hamburger.style.display = "none";
        cross.style.display = "block";
        menuState = "open";
    } else if (menuState === "open") {

        closeMenu();
    } 
}
