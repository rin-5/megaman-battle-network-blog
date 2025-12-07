const BURGER = document.getElementById("home-header-menu-icon");
const MOBILEMENU = document.getElementById("mobile-menu");

BURGER.addEventListener("click", () => {
    MOBILEMENU.classList.toggle("menu-visible");
});