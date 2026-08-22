// ALWAYS START AT TOP ON REFRESH
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("beforeunload", () => {
    window.scrollTo(0, 0);
});

window.addEventListener("load", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
    });
});


// ==========================================
// MOBILE MENU
// ==========================================

const mobileMenuButton = document.querySelector(".mobile-menu-btn");
const siteMenu = document.querySelector(".site-menu");

if (mobileMenuButton && siteMenu) {
    mobileMenuButton.addEventListener("click", () => {
        siteMenu.classList.toggle("active");
        mobileMenuButton.classList.toggle("active");
    });

    siteMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            siteMenu.classList.remove("active");
            mobileMenuButton.classList.remove("active");
        });
    });
}


// ==========================================
// GENERAL SECTION REVEAL
// ==========================================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add("show"));
}


// ==========================================
// SCROLL-DRIVEN HERO
// ==========================================

const hero = document.querySelector(".hero");
let heroFramePending = false;

function updateHeroScroll() {
    heroFramePending = false;

    if (!hero) return;

    // Keep mobile lightweight
    if (window.innerWidth <= 700) {
        hero.style.setProperty("--hero-progress", "0");
        return;
    }

    const rect = hero.getBoundingClientRect();
    const distance = Math.max(hero.offsetHeight, 1);

    let progress = -rect.top / distance;
    progress = Math.max(0, Math.min(progress, 1));

    hero.style.setProperty("--hero-progress", progress.toFixed(4));
}

function requestHeroUpdate() {
    if (heroFramePending) return;

    heroFramePending = true;
    requestAnimationFrame(updateHeroScroll);
}

window.addEventListener("scroll", requestHeroUpdate, { passive: true });
window.addEventListener("resize", requestHeroUpdate);

requestHeroUpdate();


// ==========================================
// PROJECT REVEAL
// ==========================================

const projectItems = document.querySelectorAll(".project-item");

if ("IntersectionObserver" in window) {
    const projectObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("project-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px"
    });

    projectItems.forEach((project) => projectObserver.observe(project));
} else {
    projectItems.forEach((project) => {
        project.classList.add("project-visible");
    });
}


// ==========================================
// PROJECT DATA
// ==========================================

const projects = {
    "modern-tropical": {
        title: "Modern Tropical",
        category: "Residential",
        description: "Warm tropical interiors with natural wood finishes and contemporary elegance.",
        images: [
            "images/Modern Tropical/Modern Tropical.jpg",
            "images/Modern Tropical/Modern Tropical (2).jpg",
            "images/Modern Tropical/Modern Tropical (3).jpg",
            "images/Modern Tropical/Modern Tropical (4).jpg",
            "images/Modern Tropical/Modern Tropical (5).jpg",
            "images/Modern Tropical/Modern Tropical (6).jpg",
            "images/Modern Tropical/Modern Tropical (7).jpg",
            "images/Modern Tropical/Modern Tropical (8).jpg"
        ]
    },

    "modern-luxury-style": {
        title: "Modern Luxury Style",
        category: "Residential",
        description: "Sophisticated interiors featuring premium finishes and timeless luxury.",
        images: [
            "images/Modern Luxury Style/Modern Luxury Style.jpg",
            "images/Modern Luxury Style/Modern Luxury Style (2).jpg",
            "images/Modern Luxury Style/Modern Luxury Style (3).jpg",
            "images/Modern Luxury Style/Modern Luxury Style (4).jpg",
            "images/Modern Luxury Style/Modern Luxury Style (5).jpg",
            "images/Modern Luxury Style/Modern Luxury Style (6).jpg"
        ]
    },

    "master-bedroom": {
        title: "Master Bedroom",
        category: "Bedroom",
        description: "Comfortable and elegant bedroom designed for relaxation.",
        images: [
            "images/Master Bedroom/Master Bedroom.jpg",
            "images/Master Bedroom/Master Bedroom (2).jpg",
            "images/Master Bedroom/Master Bedroom (3).jpg",
            "images/Master Bedroom/Master Bedroom (4).jpg"
        ]
    },

    "rustic-industrial-look": {
        title: "Rustic-Industrial Look",
        category: "Interior Design",
        description: "A blend of industrial textures and warm rustic materials.",
        images: [
            "images/Rustic-Industrial look/Rustic-Industrial look.jpg",
            "images/Rustic-Industrial look/Rustic-Industrial look (2).jpg",
            "images/Rustic-Industrial look/Rustic-Industrial look (3).jpg",
            "images/Rustic-Industrial look/Rustic-Industrial look (4).jpg",
            "images/Rustic-Industrial look/Rustic-Industrial look (5).jpg",
            "images/Rustic-Industrial look/Rustic-Industrial look (6).jpg",
            "images/Rustic-Industrial look/Rustic-Industrial look (7).jpg",
            "images/Rustic-Industrial look/Rustic-Industrial look (8).jpg"
        ]
    },

    "our-first-condo-project": {
        title: "Our First Condo Project",
        category: "Condo",
        description: "Modern condominium interior designed for comfort and functionality.",
        images: [
            "images/Our first condo project/Our first condo project.jpg",
            "images/Our first condo project/Our first condo project (2).jpg",
            "images/Our first condo project/Our first condo project (3).jpg",
            "images/Our first condo project/Our first condo project (4).jpg",
            "images/Our first condo project/Our first condo project (5).jpg",
            "images/Our first condo project/Our first condo project (6).jpg",
            "images/Our first condo project/Our first condo project (7).jpg",
            "images/Our first condo project/Our first condo project (8).jpg",
            "images/Our first condo project/Our first condo project (9).jpg",
            "images/Our first condo project/Our first condo project (10).jpg"
        ]
    },

    "luxury-and-ease-in-the-heart-of-the-metro": {
        title: "Luxury and Ease in the Heart of the Metro",
        category: "Residential",
        description: "Contemporary urban living with luxurious interior details.",
        images: [
            "images/Luxury and ease in the heart of the Metro/Luxury and ease in the heart of the Metro.jpg",
            "images/Luxury and ease in the heart of the Metro/Luxury and ease in the heart of the Metro (2).jpg"
        ]
    },

    "luxury-retreat": {
        title: "Luxury Retreat",
        category: "Residential",
        description: "A relaxing residential space inspired by modern luxury living.",
        images: [
            "images/Luxury Retreat/Luxury Retreat.jpg",
            "images/Luxury Retreat/Luxury Retreat (2).jpg",
            "images/Luxury Retreat/Luxury Retreat (3).jpg",
            "images/Luxury Retreat/Luxury Retreat (4).jpg",
            "images/Luxury Retreat/Luxury Retreat (5).jpg"
        ]
    },

    "modern-contemporary-look": {
        title: "Modern Contemporary Look",
        category: "Residential",
        description: "Clean architectural lines paired with refined modern interiors.",
        images: [
            "images/Modern contemporary look/Modern contemporary look.jpg",
            "images/Modern contemporary look/Modern contemporary look (2).jpg",
            "images/Modern contemporary look/Modern contemporary look (3).jpg"
        ]
    },

    "modern-balinese-resort": {
        title: "Modern Balinese Resort",
        category: "Resort",
        description: "Resort-inspired living with tropical warmth and natural textures.",
        images: [
            "images/Modern Balinese Resort/Modern Balinese Resort.jpg",
            "images/Modern Balinese Resort/Modern Balinese Resort (2).jpg",
            "images/Modern Balinese Resort/Modern Balinese Resort (3).jpg",
            "images/Modern Balinese Resort/Modern Balinese Resort (4).jpg",
            "images/Modern Balinese Resort/Modern Balinese Resort (5).jpg",
            "images/Modern Balinese Resort/Modern Balinese Resort (6).jpg",
            "images/Modern Balinese Resort/Modern Balinese Resort (7).jpg",
            "images/Modern Balinese Resort/Modern Balinese Resort (8).jpg"
        ]
    },

    "custom-modular-cabinets": {
        title: "Custom Modular Cabinets",
        category: "Kitchen",
        description: "Custom-built cabinetry designed for style, storage, and everyday functionality.",
        images: [
            "images/Custom Modular Cabinets/Custom Modular Cabinets.jpg",
            "images/Custom Modular Cabinets/Custom Modular Cabinets (2).jpg",
            "images/Custom Modular Cabinets/Custom Modular Cabinets (3).jpg",
            "images/Custom Modular Cabinets/Custom Modular Cabinets (4).jpg"
        ]
    }
};


// ==========================================
// GALLERY ELEMENTS
// ==========================================

const galleryModal = document.getElementById("galleryModal");
const galleryMainImage = document.getElementById("galleryMainImage");
const galleryCategory = document.getElementById("galleryCategory");
const galleryTitle = document.getElementById("galleryTitle");
const galleryDescription = document.getElementById("galleryDescription");
const galleryThumbs = document.getElementById("galleryThumbs");
const galleryCloseButton = document.querySelector(".gallery-close");
const galleryOverlay = document.querySelector(".gallery-overlay");

let activeProjectKey = null;
let activeImageIndex = 0;


// ==========================================
// GET ACTIVE IMAGES
// ==========================================

function getActiveImages() {
    if (!activeProjectKey) return [];

    const project = projects[activeProjectKey];
    return project?.images || [];
}


// ==========================================
// MAIN IMAGE
// ==========================================

function setMainImage(src) {
    if (!galleryMainImage || !src) return;

    galleryMainImage.classList.remove("loaded");

    galleryMainImage.onload = () => {
        galleryMainImage.classList.add("loaded");
    };

    galleryMainImage.onerror = () => {
        console.warn("Could not load gallery image:", src);
        galleryMainImage.classList.add("loaded");
    };

    galleryMainImage.src = src;
}


// ==========================================
// ACTIVE THUMBNAIL
// ==========================================

function setActiveThumb(index) {
    if (!galleryThumbs) return;

    const thumbnails = galleryThumbs.querySelectorAll(".gallery-thumb");

    thumbnails.forEach((thumbnail, thumbnailIndex) => {
        thumbnail.classList.toggle("active", thumbnailIndex === index);
    });

    const activeThumbnail = thumbnails[index];

    if (activeThumbnail) {
        activeThumbnail.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest"
        });
    }
}


// ==========================================
// GALLERY META
// ==========================================

function updateGalleryMeta(project) {
    if (!project) return;

    if (galleryCategory) galleryCategory.textContent = project.category;
    if (galleryTitle) galleryTitle.textContent = project.title;
    if (galleryDescription) galleryDescription.textContent = project.description;
}


// ==========================================
// OPEN / CLOSE GALLERY
// ==========================================

function openGallery() {
    if (!galleryModal) return;

    galleryModal.classList.add("active");
    galleryModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeGallery() {
    if (!galleryModal) return;

    galleryModal.classList.remove("active");
    galleryModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    activeProjectKey = null;
    activeImageIndex = 0;

    if (galleryThumbs) galleryThumbs.innerHTML = "";

    if (galleryMainImage) {
        galleryMainImage.src = "";
        galleryMainImage.classList.remove("loaded");
    }
}


// ==========================================
// RENDER GALLERY
// ==========================================

function renderGallery(projectKey) {
    const project = projects[projectKey];

    if (!project) {
        console.warn("Project not found:", projectKey);
        return;
    }

    const images = project.images || [];

    if (!images.length) {
        console.warn("No images found:", projectKey);
        return;
    }

    activeProjectKey = projectKey;
    activeImageIndex = 0;

    updateGalleryMeta(project);

    if (galleryThumbs) {
        galleryThumbs.innerHTML = "";

        const fragment = document.createDocumentFragment();

        images.forEach((src, index) => {
            const thumbnail = document.createElement("button");
            thumbnail.type = "button";
            thumbnail.className = "gallery-thumb";
            thumbnail.setAttribute("aria-label", `${project.title} image ${index + 1}`);

            const image = document.createElement("img");
            image.src = src;
            image.alt = `${project.title} ${index + 1}`;
            image.loading = "lazy";

            thumbnail.appendChild(image);

            thumbnail.addEventListener("click", () => {
                activeImageIndex = index;
                setMainImage(images[activeImageIndex]);
                setActiveThumb(activeImageIndex);
            });

            fragment.appendChild(thumbnail);
        });

        galleryThumbs.appendChild(fragment);
    }

    if (galleryMainImage) {
        galleryMainImage.alt = project.title;
    }

    setMainImage(images[0]);
    setActiveThumb(0);
    openGallery();
}


// ==========================================
// PREVIOUS / NEXT IMAGE
// ==========================================

function shiftGalleryImage(direction) {
    const images = getActiveImages();

    if (!images.length) return;

    activeImageIndex =
        (activeImageIndex + direction + images.length) % images.length;

    setMainImage(images[activeImageIndex]);
    setActiveThumb(activeImageIndex);
}


// ==========================================
// PROJECT CLICKS
// ==========================================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
    card.addEventListener("click", () => {
        const projectKey = card.dataset.project;

        if (!projectKey || !projects[projectKey]) return;

        renderGallery(projectKey);
    });
});


// ==========================================
// CLOSE EVENTS
// ==========================================

if (galleryCloseButton) {
    galleryCloseButton.addEventListener("click", closeGallery);
}

if (galleryOverlay) {
    galleryOverlay.addEventListener("click", closeGallery);
}


// ==========================================
// KEYBOARD CONTROLS
// ==========================================

document.addEventListener("keydown", (event) => {
    if (!galleryModal?.classList.contains("active")) return;

    if (event.key === "Escape") {
        closeGallery();
    }

    if (event.key === "ArrowRight") {
        shiftGalleryImage(1);
    }

    if (event.key === "ArrowLeft") {
        shiftGalleryImage(-1);
    }
});