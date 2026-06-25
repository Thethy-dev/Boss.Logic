
const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const menuLinks = menu.querySelectorAll("a");

// Функція для закриття, щоб не дублювати код (лікар не повторює одне й те саме двічі!)
function closeMenu() {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
}

// Перемикач відкриття/закриття
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
});

// Закриття при виборі посилання
menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});

// Закриття при кліку поза меню
document.addEventListener("click", (event) => {
    // Якщо меню відкрите ТА клік не по кнопці ТА не по самому меню
    if (menu.classList.contains("active") && 
        !menuBtn.contains(event.target) && 
        !menu.contains(event.target)) {
        closeMenu();
    }
});