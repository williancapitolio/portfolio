var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (this.window.pageYOffset > 56) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
});

//////////

const hamburgerMenu = document.querySelector('.hamburgerMenu');
const body = document.querySelector('body');
const navMenu = document.querySelector('.navbar-nav');

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.contains("bi-list")
        ? hamburgerMenu.classList.replace("bi-list", "bi-x")
        : hamburgerMenu.classList.replace("bi-x", "bi-list");
    //navMenu.classList.toggle("active"); // adiciona a classe .navMenu e abre a navbar mobile
    //body.classList.toggle("menuNavActive"); //adicionando a classe no body
});

/*
document.querySelectorAll(".navLink").forEach(n => n.addEventListener("click", () => { // quando há um clique nos links da nav mobile
    hamburgerMenu.classList.remove("bi-x"); // remove o ícone x
    hamburgerMenu.classList.add("bi-list") // adiciona o ícone list
    navMenu.classList.remove("active"); // remova a classe ativa da classe .navMenu
    //if (document.querySelector("menuNavActive"))
    //body.classList.toggle("menuNavActive"); //remove a classe no body
}));
*/
