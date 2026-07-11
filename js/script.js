// ===============================
// Navbar Shadow on Scroll
// ===============================

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});

// ===============================
// Fade-in Animation
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

document.querySelectorAll("section").forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});

// ===============================
// Back To Top Button
// ===============================

const topButton = document.createElement("button");
topButton.innerHTML = "&uarr;";
topButton.className = "top-btn";

document.body.appendChild(topButton);

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

// ===========================
// Back To Top
// ===========================

const topButton = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topButton.classList.add("active");

    }else{

        topButton.classList.remove("active");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===========================
// Scroll Animation
// ===========================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".reveal").forEach(el=>{

    observer.observe(el);

});

// ===========================
// DARK MODE
// ===========================

const toggle = document.getElementById("theme-toggle");

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark-mode");

    toggle.innerHTML="☀️";

}

toggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        toggle.innerHTML="☀️";

        localStorage.setItem("theme","dark");

    }else{

        toggle.innerHTML="🌙";

        localStorage.setItem("theme","light");

    }

});

// =========================
// DARK MODE
// =========================

const themeToggle = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");

    themeToggle.innerHTML = "☀️";

}

themeToggle.addEventListener("click", ()=>{

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeToggle.innerHTML = "☀️";

        localStorage.setItem("theme","dark");

    }else{

        themeToggle.innerHTML = "🌙";

        localStorage.setItem("theme","light");

    }

});