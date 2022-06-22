//////////////////////////////////////////////////

var nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    this.window.pageYOffset > 60
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

    if (navMenu.classList.contains("active")) {
        nav.classList.add('bg-dark', 'shadow');
    } else if (this.window.pageYOffset < 60) {
        nav.classList.remove('bg-dark', 'shadow');
    };

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

//////////////////////////////////////////////////

const menuLinks = document.querySelectorAll('.navbar a[href^="#"], .arrasteInicio[href^="#"]');

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 70;
    smoothScrollTo(0, distanceFromTheTop, 200)
}

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration : 400;

    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1)
            return (distance / 2) * time * time * time * time + from;
        return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
    }, 1000 / 60);
}

//////////////////////////////////////////////////

const item = document.querySelectorAll("[data-anime");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    item.forEach((element) => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate")
        }
    });
};

animeScroll();

window.addEventListener("scroll", () => {
    animeScroll();
});