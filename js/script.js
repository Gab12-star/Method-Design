// ===========================
// Navbar Shadow
// ===========================

const navbar = document.querySelector(".site-nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }

});

// ===========================
// Scroll Reveal Animation
// ===========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
});

// ===========================
// Back To Top Button
// ===========================

const topButton = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topButton.classList.add("active");
    } else {
        topButton.classList.remove("active");
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

