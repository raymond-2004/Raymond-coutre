// ===========================
// R@YMOND-COUTURE
// script.js
// ===========================

// Loader
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1500);
});

// Bouton Retour en haut
const topBtn = document.getElementById("top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Menu Mobile
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {

    if (menu.style.display === "flex") {

        menu.style.display = "none";

    } else {

        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.position = "absolute";
        menu.style.top = "80px";
        menu.style.right = "20px";
        menu.style.background = "#111";
        menu.style.padding = "20px";
        menu.style.borderRadius = "10px";

    }

});

// Fermer le menu après un clic
const liens = document.querySelectorAll("nav ul li a");

liens.forEach((lien) => {

    lien.addEventListener("click", () => {

        if (window.innerWidth < 900) {
            menu.style.display = "none";
        }

    });

});

// Animation au défilement
const elements = document.querySelectorAll(".card, .client, .gallery-grid img, .about, .contact");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition = "1s";

        }

    });

}, {
    threshold: 0.2
});

elements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";

    observer.observe(element);

});

// Message après l'envoi du formulaire
const formulaire = document.querySelector("form");

formulaire.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Merci ! Votre message a été envoyé à R@YMOND-COUTURE.");

    formulaire.reset();

});

// Changement de couleur de la barre de navigation
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        header.style.background = "#000";

    } else {

        header.style.background = "rgba(0,0,0,.7)";

    }

});