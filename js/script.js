// ===============================
// Navbar Shadow on Scroll
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});


// ===============================
// Reveal Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
});


// ===============================
// Back To Top Button
// ===============================

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


// ===============================
// Active Navigation Highlight
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});