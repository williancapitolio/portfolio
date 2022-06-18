//////////////////////////////////////////////////

var nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    this.window.pageYOffset > 56
        ? nav.classList.add('bg-dark', 'shadow')
        : nav.classList.remove('bg-dark', 'shadow');
});

//////////////////////////////////////////////////

const hamburgerMenu = document.querySelector('.hamburgerMenu');
const body = document.querySelector('body');
const navMenu = document.querySelector('.navMenu');

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.contains("bi-list")
        ? hamburgerMenu.classList.replace("bi-list", "bi-x")
        : hamburgerMenu.classList.replace("bi-x", "bi-list");

    navMenu.classList.toggle("active");

    navMenu.classList.contains("active")
        ? nav.classList.add('bg-dark', 'shadow')
        : nav.classList.remove('bg-dark', 'shadow');

    body.classList.toggle("menuNavActive");

    navMenu.classList.contains("active")
        ? body.classList.add('menuNavActive')
        : body.classList.remove('menuNavActive');
});

document.querySelectorAll(".navLink").forEach(n => n.addEventListener("click", () => {
    hamburgerMenu.classList.remove("bi-x");
    hamburgerMenu.classList.add("bi-list");
    navMenu.classList.remove("active");
    body.classList.remove("menuNavActive");
    this.window.pageYOffset > 0
        ? nav.classList.add('bg-dark', 'shadow')
        : nav.classList.remove('bg-dark', 'shadow');
}));