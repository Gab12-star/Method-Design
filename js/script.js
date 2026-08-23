// ==================================================
// PAGE START
// ==================================================

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);


// ==================================================
// ELEMENTS
// ==================================================

const siteIntro = document.getElementById("siteIntro");

const mobileMenuButton = document.querySelector(".mobile-menu-btn");
const siteMenu = document.querySelector(".site-menu");

const hero = document.querySelector(".hero");
const heroStage = document.querySelector(".hero-stage");

const heroCards = [
    ...document.querySelectorAll(".hero-card")
];

const heroDots = [
    ...document.querySelectorAll(".hero-dots button")
];

const heroCounter = document.querySelector(".hero-number");
const heroProjectName = document.querySelector(".hero-project-name");

const projectFilterButtons = [
    ...document.querySelectorAll(".project-filter")
];

const projectGridItems = [
    ...document.querySelectorAll(".project-grid-item")
];


// ==================================================
// PROJECT GALLERY ELEMENTS
// ==================================================

const galleryModal = document.getElementById("galleryModal");

const galleryMainImage = document.getElementById(
    "galleryMainImage"
);

const galleryCategory = document.getElementById(
    "galleryCategory"
);

const galleryTitle = document.getElementById(
    "galleryTitle"
);

const galleryThumbs = document.getElementById(
    "galleryThumbs"
);

const galleryCloseButton = document.querySelector(
    ".gallery-close"
);

const galleryOverlay = document.querySelector(
    ".gallery-overlay"
);


// ==================================================
// SHOP ELEMENTS
// ==================================================

const shopButton = document.getElementById("shopButton");

const shopModal = document.getElementById("shopModal");

const shopClose = document.getElementById("shopClose");

const shopOverlay = document.querySelector(
    ".shop-modal-overlay"
);


// ==================================================
// WEBSITE INTRO
// ==================================================

if (siteIntro) {

    document.body.classList.add("intro-open");


    setTimeout(() => {

        siteIntro.classList.add("reveal-site");

    }, 1500);


    setTimeout(() => {

        siteIntro.classList.add("hide");

        document.body.classList.remove("intro-open");

    }, 2250);

}


// ==================================================
// MOBILE MENU
// ==================================================

if (mobileMenuButton && siteMenu) {

    mobileMenuButton.addEventListener(
        "click",
        () => {

            siteMenu.classList.toggle("active");

            mobileMenuButton.classList.toggle("active");

        }
    );


    siteMenu
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    siteMenu.classList.remove("active");

                    mobileMenuButton.classList.remove("active");

                }
            );

        });

}


// ==================================================
// GENERAL SCROLL REVEAL
// ==================================================

const revealElements = document.querySelectorAll(
    ".reveal"
);


if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }


                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }
    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("show");

    });

}


// ==================================================
// PROJECT FILTERS
// ==================================================

function filterProjects(selectedFilter) {

    projectGridItems.forEach(project => {

        const category =
            project.dataset.category || "";


        const shouldShow =
            selectedFilter === "all" ||
            selectedFilter === category;


        project.classList.toggle(
            "project-hidden",
            !shouldShow
        );

    });

}


projectFilterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const selectedFilter =
                button.dataset.filter || "all";


            projectFilterButtons.forEach(
                filterButton => {

                    filterButton.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add("active");


            filterProjects(selectedFilter);

        }
    );

});


// ==================================================
// PROJECT DATA
// ==================================================

const projects = {


    // ==================================================
    // 01 REAL COMMERCIAL TACLOBAN
    // ==================================================

    "real-commercial-tacloban": {

        title: "REAL COMMERCIAL TACLOBAN",

        category: "3-STOREY RESIDENTIAL",

        images: [
            "images/projects/3.1.png",
            "images/projects/3.2.png",
            "images/projects/3.3.png",
            "images/projects/3.4.png",
            "images/projects/3.5.png",
            "images/projects/3.6.png",
            "images/projects/3.7.png",
            "images/projects/3.8.png",
            "images/projects/3.9.png",
            "images/projects/3.10.png"
        ]

    },


    // ==================================================
    // 02 SHANG RESIDENCES
    // ==================================================

    "shang-residences": {

        title: "SHANG RESIDENCES, WACK WACK",

        category: "168SQM. 3-BEDROOM CONDO UNIT",

        images: [
            "images/projects/4.1.png",
            "images/projects/4.2.png",
            "images/projects/4.3.png",
            "images/projects/4.4.png",
            "images/projects/4.5.png"
        ]

    },


    // ==================================================
    // 03 PARKRIDGE ESTATE
    // ==================================================

    "parkridge-estate": {

        title: "PARKRIDGE ESTATE",

        category: "3-STOREY RESIDENTIAL",

        images: [
            "images/projects/2.1.png",
            "images/projects/2.2.png",
            "images/projects/2.3.png",
            "images/projects/2.4.png",
            "images/projects/2.5.png",
            "images/projects/2.6.png",
            "images/projects/2.7.png",
            "images/projects/2.8.png",
            "images/projects/2.9.png",
            "images/projects/2.10.png",
            "images/projects/2.11.png",
            "images/projects/2.12.png",
            "images/projects/2.13.png",
            "images/projects/2.14.png",
            "images/projects/2.15.png",
            "images/projects/2.16.jpg",
            "images/projects/2.17.png",
            "images/projects/2.18.png",
            "images/projects/2.19.png",
            "images/projects/2.20.png",
            "images/projects/2.21.png",
            "images/projects/2.22.png",
            "images/projects/2.23.png"
        ]

    },


    // ==================================================
    // 04 FORBESWOOD BGC
    // ==================================================

    "forbeswood-bgc": {

        title: "FORBESWOOD BGC",

        category: "68SQM. 2-BEDROOM CONDO UNIT",

        images: [
            "images/projects/1.0.png",
            "images/projects/1.1.png",
            "images/projects/1.2.png",
            "images/projects/1.3.png",
            "images/projects/1.4.png",
            "images/projects/1.5.png",
            "images/projects/1.6.png"
        ]

    },


    // ==================================================
    // 05 CENTRAL PARKWEST BGC - 1 BEDROOM
    // ==================================================

    "central-parkwest-1br": {

        title: "CENTRAL PARKWEST BGC",

        category: "43SQM. 1 BEDROOM CONDO UNIT",

        images: [
            "images/projects/6.1.png",
            "images/projects/6.2.png",
            "images/projects/6.3.png",
            "images/projects/6.4.png",
            "images/projects/6.5.png",
            "images/projects/6.6.png"
        ]

    },


    // ==================================================
    // 06 CENTRAL PARKWEST BGC - 2 BEDROOM
    // ==================================================

    "central-parkwest-2br": {

        title: "CENTRAL PARKWEST BGC",

        category: "43SQM. 2 BEDROOM CONDO UNIT",

        images: [
            "images/projects/7.1.png",
            "images/projects/7.2.png",
            "images/projects/7.3.png",
            "images/projects/7.4.png",
            "images/projects/7.5.png",
            "images/projects/7.6.png",
            "images/projects/7.7.png"
        ]

    },


    // ==================================================
    // 07 ONE ARCHERS PLACE TAFT
    // ==================================================

    "one-archers-place-taft": {

        title: "ONE ARCHERS PLACE TAFT",

        category: "30SQM. ONE BEDROOM CONDO UNIT",

        images: [
            "images/projects/8.1.png",
            "images/projects/8.2.png",
            "images/projects/8.3.png",
            "images/projects/8.4.png",
            "images/projects/8.5.png",
            "images/projects/8.6.png"
        ]

    },


    // ==================================================
    // 08 THE RISE MAKATI
    // ==================================================

    "the-rise-makati": {

        title: "THE RISE MAKATI",

        category: "28SQM. ONE BEDROOM CONDO UNIT",

        images: [
            "images/projects/5.1.png",
            "images/projects/5.2.png",
            "images/projects/5.3.png",
            "images/projects/5.4.png",
            "images/projects/5.5.png"
        ]

    }

};


// ==================================================
// HERO DATA
// ==================================================

const heroProjects = [
    "REAL COMMERCIAL TACLOBAN",
    "THE RISE MAKATI",
    "PARKRIDGE ESTATE",
    "SHANG RESIDENCES, WACK WACK",
    "FORBESWOOD BGC"
];


let heroIndex = 0;

let heroAnimating = false;

let wheelAccumulator = 0;

let wheelTimer = null;

let touchStartX = 0;

let touchStartY = 0;


// ==================================================
// UPDATE HERO
// ==================================================

function updateHero() {

    if (!heroCards.length) {
        return;
    }


    const total = heroCards.length;


    heroCards.forEach(
        (card, index) => {

            card.classList.remove(
                "active",
                "prev",
                "next",
                "far-prev",
                "far-next",
                "hidden-card"
            );


            let difference =
                index - heroIndex;


            if (difference > total / 2) {

                difference -= total;

            }


            if (difference < -total / 2) {

                difference += total;

            }


            if (difference === 0) {

                card.classList.add("active");

            } else if (difference === -1) {

                card.classList.add("prev");

            } else if (difference === 1) {

                card.classList.add("next");

            } else if (difference === -2) {

                card.classList.add("far-prev");

            } else if (difference === 2) {

                card.classList.add("far-next");

            } else {

                card.classList.add("hidden-card");

            }

        }
    );


    // HERO DOTS

    heroDots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active",
                index === heroIndex
            );

        }
    );


    // HERO COUNTER

    if (heroCounter) {

        heroCounter.textContent =
            `${String(heroIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

    }


    // HERO PROJECT NAME

    if (heroProjectName) {

        heroProjectName.textContent =
            heroProjects[heroIndex] || "";

    }

}


// ==================================================
// CHANGE HERO
// ==================================================

function changeHero(direction) {

    if (heroAnimating) {
        return false;
    }


    const nextIndex =
        heroIndex + direction;


    if (
        nextIndex < 0 ||
        nextIndex >= heroCards.length
    ) {

        return false;

    }


    heroAnimating = true;

    heroIndex = nextIndex;


    updateHero();


    setTimeout(
        () => {

            heroAnimating = false;

        },
        850
    );


    return true;

}


// ==================================================
// HERO VISIBILITY
// ==================================================

function heroIsVisible() {

    if (!hero) {
        return false;
    }


    const rect =
        hero.getBoundingClientRect();


    return (
        rect.top <
            window.innerHeight * 0.58 &&
        rect.bottom >
            window.innerHeight * 0.42
    );

}


// ==================================================
// HERO WHEEL / TRACKPAD
// ==================================================

window.addEventListener(
    "wheel",
    event => {

        if (!heroCards.length) {
            return;
        }


        if (!heroIsVisible()) {
            return;
        }


        // DO NOT CONTROL HERO
        // WHILE PROJECT GALLERY IS OPEN

        if (
            galleryModal?.classList.contains(
                "active"
            )
        ) {

            return;

        }


        // DO NOT CONTROL HERO
        // WHILE SHOP MODAL IS OPEN

        if (
            shopModal?.classList.contains(
                "active"
            )
        ) {

            return;

        }


        // DO NOT CONTROL HERO
        // WHILE INTRO IS OPEN

        if (
            siteIntro &&
            !siteIntro.classList.contains(
                "hide"
            )
        ) {

            return;

        }


        const direction =
            event.deltaY > 0
                ? 1
                : -1;


        // LAST HERO:
        // ALLOW NORMAL PAGE SCROLL DOWN

        if (
            direction === 1 &&
            heroIndex ===
                heroCards.length - 1
        ) {

            wheelAccumulator = 0;

            return;

        }


        // FIRST HERO:
        // ALLOW NORMAL PAGE SCROLL UP

        if (
            direction === -1 &&
            heroIndex === 0
        ) {

            wheelAccumulator = 0;

            return;

        }


        event.preventDefault();


        if (heroAnimating) {
            return;
        }


        wheelAccumulator +=
            event.deltaY;


        clearTimeout(wheelTimer);


        wheelTimer = setTimeout(
            () => {

                wheelAccumulator = 0;

            },
            140
        );


        // IGNORE SMALL TRACKPAD MOVEMENTS

        if (
            Math.abs(wheelAccumulator) <
            45
        ) {

            return;

        }


        const changed =
            changeHero(
                wheelAccumulator > 0
                    ? 1
                    : -1
            );


        if (changed) {

            wheelAccumulator = 0;

        }

    },
    {
        passive: false
    }
);


// ==================================================
// HERO TOUCH / SWIPE
// ==================================================

if (heroStage) {

    heroStage.addEventListener(
        "touchstart",
        event => {

            const touch =
                event.touches[0];


            touchStartX =
                touch.clientX;

            touchStartY =
                touch.clientY;

        },
        {
            passive: true
        }
    );


    heroStage.addEventListener(
        "touchend",
        event => {

            if (heroAnimating) {
                return;
            }


            if (
                shopModal?.classList.contains(
                    "active"
                )
            ) {

                return;

            }


            if (
                galleryModal?.classList.contains(
                    "active"
                )
            ) {

                return;

            }


            const touch =
                event.changedTouches[0];


            const deltaX =
                touchStartX -
                touch.clientX;

            const deltaY =
                touchStartY -
                touch.clientY;


            const absoluteX =
                Math.abs(deltaX);

            const absoluteY =
                Math.abs(deltaY);


            if (
                absoluteX < 45 &&
                absoluteY < 45
            ) {

                return;

            }


            let direction;


            if (absoluteY >= absoluteX) {

                direction =
                    deltaY > 0
                        ? 1
                        : -1;

            } else {

                direction =
                    deltaX > 0
                        ? 1
                        : -1;

            }


            changeHero(direction);

        },
        {
            passive: true
        }
    );

}


// ==================================================
// HERO DOT BUTTONS
// ==================================================

heroDots.forEach(
    (dot, index) => {

        dot.addEventListener(
            "click",
            () => {

                if (heroAnimating) {
                    return;
                }


                if (index === heroIndex) {
                    return;
                }


                heroAnimating = true;

                heroIndex = index;


                updateHero();


                setTimeout(
                    () => {

                        heroAnimating = false;

                    },
                    850
                );

            }
        );

    }
);


// INITIAL HERO

updateHero();


// ==================================================
// GALLERY STATE
// ==================================================

let activeProjectKey = null;

let activeImageIndex = 0;


// ==================================================
// GET ACTIVE PROJECT IMAGES
// ==================================================

function getActiveImages() {

    if (!activeProjectKey) {
        return [];
    }


    return (
        projects[activeProjectKey]?.images ||
        []
    );

}


// ==================================================
// SET MAIN GALLERY IMAGE
// ==================================================

function setMainImage(src) {

    if (!galleryMainImage || !src) {
        return;
    }


    galleryMainImage.classList.remove(
        "loaded"
    );


    galleryMainImage.onload = () => {

        galleryMainImage.classList.add(
            "loaded"
        );

    };


    galleryMainImage.onerror = () => {

        console.warn(
            "Could not load project image:",
            src
        );


        galleryMainImage.classList.add(
            "loaded"
        );

    };


    galleryMainImage.src = src;

}


// ==================================================
// SET ACTIVE THUMBNAIL
// ==================================================

function setActiveThumb(index) {

    if (!galleryThumbs) {
        return;
    }


    const thumbnails =
        galleryThumbs.querySelectorAll(
            ".gallery-thumb"
        );


    thumbnails.forEach(
        (
            thumbnail,
            thumbnailIndex
        ) => {

            thumbnail.classList.toggle(
                "active",
                thumbnailIndex === index
            );

        }
    );


    thumbnails[index]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest"
    });

}


// ==================================================
// OPEN GALLERY
// ==================================================

function openGallery() {

    if (!galleryModal) {
        return;
    }


    galleryModal.classList.add(
        "active"
    );


    galleryModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


// ==================================================
// CLOSE GALLERY
// ==================================================

function closeGallery() {

    if (!galleryModal) {
        return;
    }


    galleryModal.classList.remove(
        "active"
    );


    galleryModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";


    activeProjectKey = null;

    activeImageIndex = 0;


    if (galleryThumbs) {

        galleryThumbs.innerHTML = "";

    }


    if (galleryMainImage) {

        galleryMainImage.src = "";

        galleryMainImage.classList.remove(
            "loaded"
        );

    }

}


// ==================================================
// RENDER PROJECT GALLERY
// ==================================================

function renderGallery(projectKey) {

    const project =
        projects[projectKey];


    if (
        !project ||
        !project.images ||
        !project.images.length
    ) {

        return;

    }


    const images =
        project.images;


    activeProjectKey =
        projectKey;

    activeImageIndex =
        0;


    // CATEGORY

    if (galleryCategory) {

        galleryCategory.textContent =
            project.category;

    }


    // TITLE

    if (galleryTitle) {

        galleryTitle.textContent =
            project.title;

    }


    // THUMBNAILS

    if (galleryThumbs) {

        galleryThumbs.innerHTML = "";


        const fragment =
            document.createDocumentFragment();


        images.forEach(
            (src, index) => {

                const thumbnail =
                    document.createElement(
                        "button"
                    );


                thumbnail.type =
                    "button";


                thumbnail.className =
                    "gallery-thumb";


                thumbnail.setAttribute(
                    "aria-label",
                    `${project.title} image ${index + 1}`
                );


                const image =
                    document.createElement(
                        "img"
                    );


                image.src =
                    src;


                image.alt =
                    `${project.title} ${index + 1}`;


                image.loading =
                    "lazy";


                thumbnail.appendChild(
                    image
                );


                thumbnail.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();


                        activeImageIndex =
                            index;


                        setMainImage(
                            images[index]
                        );


                        setActiveThumb(
                            index
                        );

                    }
                );


                fragment.appendChild(
                    thumbnail
                );

            }
        );


        galleryThumbs.appendChild(
            fragment
        );

    }


    if (galleryMainImage) {

        galleryMainImage.alt =
            project.title;

    }


    setMainImage(
        images[0]
    );


    setActiveThumb(
        0
    );


    openGallery();

}


// ==================================================
// NEXT / PREVIOUS GALLERY IMAGE
// ==================================================

function shiftGalleryImage(direction) {

    const images =
        getActiveImages();


    if (!images.length) {
        return;
    }


    activeImageIndex =
        (
            activeImageIndex +
            direction +
            images.length
        ) % images.length;


    setMainImage(
        images[activeImageIndex]
    );


    setActiveThumb(
        activeImageIndex
    );

}


// ==================================================
// PROJECT CARD CLICKS
// ==================================================

document
    .querySelectorAll(".project-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const projectKey =
                    card.dataset.project;


                if (
                    projectKey &&
                    projects[projectKey]
                ) {

                    renderGallery(
                        projectKey
                    );

                }

            }
        );

    });


// ==================================================
// GALLERY CLOSE CONTROLS
// ==================================================

galleryCloseButton?.addEventListener(
    "click",
    event => {

        event.stopPropagation();

        closeGallery();

    }
);


galleryOverlay?.addEventListener(
    "click",
    closeGallery
);


// ==================================================
// SHOP MODAL
// ==================================================

function openShopModal() {

    if (!shopModal) {
        return;
    }


    // CLOSE MOBILE MENU

    siteMenu?.classList.remove(
        "active"
    );

    mobileMenuButton?.classList.remove(
        "active"
    );


    shopModal.classList.add(
        "active"
    );


    shopModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


function closeShopModal() {

    if (!shopModal) {
        return;
    }


    shopModal.classList.remove(
        "active"
    );


    shopModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


// SHOP BUTTON

shopButton?.addEventListener(
    "click",
    event => {

        event.preventDefault();

        openShopModal();

    }
);


// SHOP CLOSE BUTTON

shopClose?.addEventListener(
    "click",
    event => {

        event.stopPropagation();

        closeShopModal();

    }
);


// CLICK DARK BACKGROUND TO CLOSE

shopOverlay?.addEventListener(
    "click",
    closeShopModal
);


// ==================================================
// KEYBOARD CONTROLS
// ==================================================

document.addEventListener(
    "keydown",
    event => {


        // ==================================================
        // SHOP MODAL
        // ==================================================

        if (
            shopModal?.classList.contains(
                "active"
            )
        ) {

            if (event.key === "Escape") {

                closeShopModal();

            }


            return;

        }


        // ==================================================
        // PROJECT GALLERY
        // ==================================================

        if (
            galleryModal?.classList.contains(
                "active"
            )
        ) {

            if (event.key === "Escape") {

                closeGallery();

                return;

            }


            if (event.key === "ArrowRight") {

                event.preventDefault();

                shiftGalleryImage(1);

                return;

            }


            if (event.key === "ArrowLeft") {

                event.preventDefault();

                shiftGalleryImage(-1);

                return;

            }


            return;

        }


        // ==================================================
        // HERO KEYBOARD
        // ==================================================

        if (!heroIsVisible()) {
            return;
        }


        if (
            event.key === "ArrowRight" ||
            event.key === "ArrowDown"
        ) {

            if (
                heroIndex <
                heroCards.length - 1
            ) {

                event.preventDefault();

                changeHero(1);

            }

        }


        if (
            event.key === "ArrowLeft" ||
            event.key === "ArrowUp"
        ) {

            if (heroIndex > 0) {

                event.preventDefault();

                changeHero(-1);

            }

        }

    }
);