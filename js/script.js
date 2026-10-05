document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav a");

    if (button && nav) {
        button.addEventListener("click", () => {
            nav.classList.toggle("active");
        });

        // Cierra el menú móvil al pulsar en un enlace
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
            });
        });
    }
});