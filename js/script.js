// ===============================
// Navbar Shadow on Scroll
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});


// ===============================
// Reveal Animation
// ===============================

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
});


// ===============================
// Back To Top Button
// ===============================

const topButton = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {
    if (!topButton) return;

    if (window.scrollY > 400) {
        topButton.classList.add("active");
    } else {
        topButton.classList.remove("active");
    }
});

if (topButton) {
    topButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


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
            current = section.getAttribute("id") || "";
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// ===============================
// PROJECT GALLERY DATA
// ===============================

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
        images:[
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
    title: "Rustic-Industrial look",
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
    title: "Our first condo project",
    category: "Condo",
    description: "Modern condominium interior designed for comfort and functionality.",
    images: [
        "images/Our first condo project/Our first condo project.jpg",
        "images/Our first condo project/Our first condo project (10).jpg",
        "images/Our first condo project/Our first condo project (2).jpg",
        "images/Our first condo project/Our first condo project (3).jpg",
        "images/Our first condo project/Our first condo project (4).jpg",
        "images/Our first condo project/Our first condo project (5).jpg",
        "images/Our first condo project/Our first condo project (6).jpg",
        "images/Our first condo project/Our first condo project (7).jpg",
        "images/Our first condo project/Our first condo project (8).jpg",
        "images/Our first condo project/Our first condo project (9).jpg"
    ]
},

    
    "luxury-and-ease-in-the-heart-of-the-metro": {
    title: "Luxury and ease in the heart of the Metro",
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
        images:[
    "images/Luxury Retreat/Luxury Retreat.jpg",
    "images/Luxury Retreat/Luxury Retreat (2).jpg",
    "images/Luxury Retreat/Luxury Retreat (3).jpg",
    "images/Luxury Retreat/Luxury Retreat (4).jpg",
    "images/Luxury Retreat/Luxury Retreat (5).jpg"
]
    },

    "modern-contemporary-look": {
        title: "Modern contemporary look",
        category: "Residential",
        description: "Clean architectural lines paired with refined modern interiors.",
        images:[
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

const projectOrder = [
    "modern-tropical",
    "modern-luxury-style",
    "master-bedroom",
    "rustic-industrial-look",
    "our-first-condo-project",
    "luxury-and-ease-in-the-heart-of-the-metro",
    "luxury-retreat",
    "modern-contemporary-look",
    "modern-balinese-resort",
    "custom-modular-cabinets"
];

// ===============================
// PROJECT GALLERY ELEMENTS
// ===============================

const galleryModal = document.getElementById("galleryModal");
const galleryMainImage = document.getElementById("galleryMainImage");
const galleryCategory = document.getElementById("galleryCategory");
const galleryTitle = document.getElementById("galleryTitle");
const galleryDescription = document.getElementById("galleryDescription");
const galleryThumbs = document.getElementById("galleryThumbs");
const galleryCloseBtn = document.querySelector(".gallery-close");
const galleryOverlay = document.querySelector(".gallery-overlay");

let activeProjectKey = null;
let activeImageIndex = 0;
const imageCache = new Map();

// ===============================
// HELPERS
// ===============================

function buildImagePath(folder, index) {
    return encodeURI(`images/${folder}/${folder} (${index}).jpg`);
}

function loadImage(src) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = src;
    });
}

async function getProjectImages(projectKey) {
    if (imageCache.has(projectKey)) {
        return imageCache.get(projectKey);
    }

    const project = projects[projectKey];
    if (!project) return [];

    if (Array.isArray(project.images) && project.images.length > 0) {
        imageCache.set(projectKey, project.images);
        return project.images;
    }

    const images = [];

    if (!project.folder || !project.maxImages) {
        imageCache.set(projectKey, images);
        return images;
    }

    for (let i = 1; i <= project.maxImages; i++) {
        const src = buildImagePath(project.folder, i);
        const exists = await loadImage(src);

        if (exists) {
            images.push(src);
        } else {
            if (images.length > 0) break;
        }
    }

    imageCache.set(projectKey, images);
    return images;
}

function setMainImage(src){

    if(!galleryMainImage) return;

    galleryMainImage.classList.remove("loaded");

    galleryMainImage.onload=()=>{

        galleryMainImage.classList.add("loaded");

    };

    galleryMainImage.src=src;

}
function setActiveThumb(index) {
    const thumbs = galleryThumbs?.querySelectorAll(".gallery-thumb") || [];
    thumbs.forEach((thumb, thumbIndex) => {
        thumb.classList.toggle("active", thumbIndex === index);
    });
}

function updateGalleryMeta(projectKey) {
    const project = projects[projectKey];
    if (!project) return;

    if (galleryCategory) galleryCategory.textContent = project.category;
    if (galleryTitle) galleryTitle.textContent = project.title;
    if (galleryDescription) galleryDescription.textContent = project.description;
}

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

    if (galleryThumbs) {
        galleryThumbs.innerHTML = "";
    }
}

async function renderGallery(projectKey) {
    const project = projects[projectKey];
    if (!project) return;

    activeProjectKey = projectKey;
    activeImageIndex = 0;

    updateGalleryMeta(projectKey);
    openGallery();

    if (galleryMainImage) {
        galleryMainImage.src = "";
        galleryMainImage.alt = project.title;
    }

    if (galleryThumbs) {
        galleryThumbs.innerHTML = '<p style="color:#888;margin:0;">Loading gallery...</p>';
    }

    const images = await getProjectImages(projectKey);

    if (!images.length) {
        if (galleryThumbs) {
            galleryThumbs.innerHTML = '<p style="color:#888;margin:0;">No images found for this project.</p>';
        }
        return;
    }

    if (galleryThumbs) {
        galleryThumbs.innerHTML = "";
    }

    const thumbFragment = document.createDocumentFragment();

    images.forEach((src, index) => {
        const thumb = document.createElement("button");
        thumb.type = "button";
        thumb.className = "gallery-thumb";
        thumb.setAttribute("aria-label", `${project.title} image ${index + 1}`);

        const img = document.createElement("img");
        img.src = src;
        img.alt = `${project.title} ${index + 1}`;

        thumb.appendChild(img);

        thumb.addEventListener("click", () => {
            activeImageIndex = index;
            setMainImage(src);
            setActiveThumb(index);
        });

        thumbFragment.appendChild(thumb);
    });

    galleryThumbs.appendChild(thumbFragment);

    setMainImage(images[0]);
    setActiveThumb(0);
}

function shiftGalleryImage(direction) {
    if (!activeProjectKey) return;

    const images = imageCache.get(activeProjectKey) || [];
    if (!images.length) return;

    activeImageIndex += direction;

    if (activeImageIndex < 0) {
        activeImageIndex = images.length - 1;
    } else if (activeImageIndex >= images.length) {
        activeImageIndex = 0;
    }

    setMainImage(images[activeImageIndex]);
    setActiveThumb(activeImageIndex);
}

// ===============================
// GALLERY CARD CLICK HANDLERS
// ===============================

const clickableCards = document.querySelectorAll(".project-card, .portfolio-card");

clickableCards.forEach((card, index) => {
    card.style.cursor = "pointer";

    card.addEventListener("click", () => {
        const projectKey =
            card.getAttribute("data-project") ||
            projectOrder[index] ||
            null;

        if (!projectKey || !projects[projectKey]) return;

        renderGallery(projectKey);
    });
});

// ===============================
// GALLERY CLOSE HANDLERS
// ===============================

if (galleryCloseBtn) {
    galleryCloseBtn.addEventListener("click", closeGallery);
}

if (galleryOverlay) {
    galleryOverlay.addEventListener("click", closeGallery);
}

document.addEventListener("keydown", (event) => {
    if (!galleryModal || !galleryModal.classList.contains("active")) return;

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