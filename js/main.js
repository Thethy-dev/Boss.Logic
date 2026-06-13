const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const menuLinks = menu.querySelectorAll("a");


menuBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
});

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        menuBtn.classList.remove("active");
    });
});