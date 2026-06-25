
const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const menuLinks = menu.querySelectorAll("a");

function closeMenu() {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
}

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
});

menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
    if (menu.classList.contains("active") && 
        !menuBtn.contains(event.target) && 
        !menu.contains(event.target)) {
        closeMenu();
    }
});