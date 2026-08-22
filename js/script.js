// ==============================
// START AT TOP
// ==============================
if("scrollRestoration" in history){
    history.scrollRestoration="manual";
}

window.addEventListener("load",()=>{
    window.scrollTo(0,0);
});


// ==============================
// ELEMENTS
// ==============================
const mobileMenuButton=document.querySelector(".mobile-menu-btn");
const siteMenu=document.querySelector(".site-menu");

const hero=document.querySelector(".hero");
const heroStage=document.querySelector(".hero-stage");
const heroCards=[...document.querySelectorAll(".hero-card")];
const heroDots=[...document.querySelectorAll(".hero-dots button")];
const heroCounter=document.querySelector(".hero-number");
const heroProjectName=document.querySelector(".hero-project-name");

const galleryModal=document.getElementById("galleryModal");
const galleryMainImage=document.getElementById("galleryMainImage");
const galleryCategory=document.getElementById("galleryCategory");
const galleryTitle=document.getElementById("galleryTitle");
const galleryThumbs=document.getElementById("galleryThumbs");
const galleryCloseButton=document.querySelector(".gallery-close");
const galleryOverlay=document.querySelector(".gallery-overlay");


// ==============================
// MOBILE MENU
// ==============================
if(mobileMenuButton&&siteMenu){
    mobileMenuButton.addEventListener("click",()=>{
        siteMenu.classList.toggle("active");
        mobileMenuButton.classList.toggle("active");
    });

    siteMenu.querySelectorAll("a").forEach(link=>{
        link.addEventListener("click",()=>{
            siteMenu.classList.remove("active");
            mobileMenuButton.classList.remove("active");
        });
    });
}


// ==============================
// REVEAL
// ==============================
const revealElements=document.querySelectorAll(".reveal");

if("IntersectionObserver" in window){
    const revealObserver=new IntersectionObserver((entries,observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },{
        threshold:.12,
        rootMargin:"0px 0px -50px 0px"
    });

    revealElements.forEach(el=>revealObserver.observe(el));
}else{
    revealElements.forEach(el=>el.classList.add("show"));
}


// ==============================
// PROJECT REVEAL
// ==============================
const projectItems=document.querySelectorAll(".project-item");

if("IntersectionObserver" in window){
    const projectObserver=new IntersectionObserver((entries,observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("project-visible");
                observer.unobserve(entry.target);
            }
        });
    },{
        threshold:.14,
        rootMargin:"0px 0px -40px 0px"
    });

    projectItems.forEach(project=>projectObserver.observe(project));
}else{
    projectItems.forEach(project=>{
        project.classList.add("project-visible");
    });
}


// ==============================
// PROJECT DATA
// ==============================
const projects={
    "forbeswood-bgc":{
        title:"FORBESWOOD BGC",
        category:"68SQM. 2-BEDROOM CONDO UNIT",
        images:[
            "images/projects/1.0.png",
            "images/projects/1.1.png",
            "images/projects/1.2.png",
            "images/projects/1.3.png",
            "images/projects/1.4.png",
            "images/projects/1.5.png",
            "images/projects/1.6.png"
        ]
    },

    "parkridge-estate":{
        title:"PARKRIDGE ESTATE",
        category:"3-STOREY RESIDENTIAL",
        images:[
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

    "real-commercial-tacloban":{
        title:"REAL COMMERCIAL TACLOBAN",
        category:"3-STOREY RESIDENTIAL",
        images:[
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

    "shang-residences":{
        title:"SHANG RESIDENCES, WACK WACK",
        category:"168SQM. 3-BEDROOM CONDO UNIT",
        images:[
            "images/projects/4.1.png",
            "images/projects/4.2.png",
            "images/projects/4.3.png",
            "images/projects/4.4.png",
            "images/projects/4.5.png"
        ]
    },

    "the-rise-makati":{
        title:"THE RISE MAKATI",
        category:"28SQM. ONE BEDROOM CONDO UNIT",
        images:[
            "images/projects/5.1.png",
            "images/projects/5.2.png",
            "images/projects/5.3.png",
            "images/projects/5.4.png",
            "images/projects/5.5.png"
        ]
    }
};


// ==============================
// STACKED HERO
// ==============================
const heroProjects=[
    "FORBESWOOD BGC",
    "PARKRIDGE ESTATE",
    "REAL COMMERCIAL TACLOBAN",
    "SHANG RESIDENCES, WACK WACK",
    "THE RISE MAKATI"
];

let heroIndex=0;
let heroAnimating=false;

let wheelAccumulator=0;
let wheelTimer=null;

let touchStartX=0;
let touchStartY=0;


// UPDATE CARD POSITIONS
function updateHero(){
    if(!heroCards.length)return;

    heroCards.forEach((card,index)=>{
        card.classList.remove(
            "active",
            "prev",
            "next",
            "far-prev",
            "far-next",
            "hidden-card"
        );

        const position=index-heroIndex;

        if(position===0){
            card.classList.add("active");
        }else if(position===-1){
            card.classList.add("prev");
        }else if(position===1){
            card.classList.add("next");
        }else if(position===-2){
            card.classList.add("far-prev");
        }else if(position===2){
            card.classList.add("far-next");
        }else{
            card.classList.add("hidden-card");
        }
    });

    heroDots.forEach((dot,index)=>{
        dot.classList.toggle(
            "active",
            index===heroIndex
        );
    });

    if(heroCounter){
        heroCounter.textContent=
            `${String(heroIndex+1).padStart(2,"0")} / ${String(heroCards.length).padStart(2,"0")}`;
    }

    if(heroProjectName){
        heroProjectName.textContent=
            heroProjects[heroIndex]||"";
    }
}


// CHANGE CARD
function changeHero(direction){
    if(heroAnimating)return false;

    const newIndex=heroIndex+direction;

    if(newIndex<0||newIndex>=heroCards.length){
        return false;
    }

    heroAnimating=true;
    heroIndex=newIndex;

    updateHero();

    setTimeout(()=>{
        heroAnimating=false;
    },700);

    return true;
}


// HERO CURRENTLY ON SCREEN?
function heroIsVisible(){
    if(!hero)return false;

    const rect=hero.getBoundingClientRect();

    return(
        rect.top<window.innerHeight*.55 &&
        rect.bottom>window.innerHeight*.45
    );
}


// ==============================
// MOUSE WHEEL / TRACKPAD
// ==============================
window.addEventListener("wheel",event=>{
    if(!heroCards.length)return;
    if(!heroIsVisible())return;
    if(galleryModal?.classList.contains("active"))return;

    const direction=event.deltaY>0?1:-1;

    // AT LAST CARD + SCROLL DOWN:
    // allow normal page scroll
    if(
        direction===1 &&
        heroIndex===heroCards.length-1
    ){
        wheelAccumulator=0;
        return;
    }

    // AT FIRST CARD + SCROLL UP:
    // allow normal page scroll
    if(
        direction===-1 &&
        heroIndex===0
    ){
        wheelAccumulator=0;
        return;
    }

    event.preventDefault();

    if(heroAnimating)return;

    wheelAccumulator+=event.deltaY;

    clearTimeout(wheelTimer);

    wheelTimer=setTimeout(()=>{
        wheelAccumulator=0;
    },120);

    // Prevent one tiny trackpad movement
    // from changing multiple cards
    if(Math.abs(wheelAccumulator)<40){
        return;
    }

    const changed=
        changeHero(wheelAccumulator>0?1:-1);

    if(changed){
        wheelAccumulator=0;
    }
},{
    passive:false
});


// ==============================
// MOBILE SWIPE
// ==============================
if(heroStage){
    heroStage.addEventListener("touchstart",event=>{
        const touch=event.touches[0];

        touchStartX=touch.clientX;
        touchStartY=touch.clientY;
    },{
        passive:true
    });

    heroStage.addEventListener("touchend",event=>{
        if(heroAnimating)return;

        const touch=event.changedTouches[0];

        const deltaX=
            touchStartX-touch.clientX;

        const deltaY=
            touchStartY-touch.clientY;

        const absX=Math.abs(deltaX);
        const absY=Math.abs(deltaY);

        if(absX<45&&absY<45){
            return;
        }

        let direction;

        if(absY>=absX){
            direction=deltaY>0?1:-1;
        }else{
            direction=deltaX>0?1:-1;
        }

        changeHero(direction);
    },{
        passive:true
    });
}


// ==============================
// HERO DOTS
// ==============================
heroDots.forEach((dot,index)=>{
    dot.addEventListener("click",()=>{
        if(heroAnimating)return;
        if(index===heroIndex)return;

        heroAnimating=true;
        heroIndex=index;

        updateHero();

        setTimeout(()=>{
            heroAnimating=false;
        },700);
    });
});


// INITIALIZE HERO
updateHero();


// ==============================
// GALLERY
// ==============================
let activeProjectKey=null;
let activeImageIndex=0;


function getActiveImages(){
    if(!activeProjectKey)return[];

    return projects[activeProjectKey]?.images||[];
}


function setMainImage(src){
    if(!galleryMainImage||!src)return;

    galleryMainImage.classList.remove("loaded");

    galleryMainImage.onload=()=>{
        galleryMainImage.classList.add("loaded");
    };

    galleryMainImage.onerror=()=>{
        console.warn("Could not load:",src);
        galleryMainImage.classList.add("loaded");
    };

    galleryMainImage.src=src;
}


function setActiveThumb(index){
    if(!galleryThumbs)return;

    const thumbs=
        galleryThumbs.querySelectorAll(".gallery-thumb");

    thumbs.forEach((thumb,i)=>{
        thumb.classList.toggle(
            "active",
            i===index
        );
    });

    thumbs[index]?.scrollIntoView({
        behavior:"smooth",
        block:"nearest",
        inline:"nearest"
    });
}


function openGallery(){
    if(!galleryModal)return;

    galleryModal.classList.add("active");
    galleryModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow="hidden";
}


function closeGallery(){
    if(!galleryModal)return;

    galleryModal.classList.remove("active");
    galleryModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow="";

    activeProjectKey=null;
    activeImageIndex=0;

    if(galleryThumbs){
        galleryThumbs.innerHTML="";
    }

    if(galleryMainImage){
        galleryMainImage.src="";
        galleryMainImage.classList.remove("loaded");
    }
}


function renderGallery(projectKey){
    const project=projects[projectKey];

    if(!project)return;

    const images=project.images||[];

    if(!images.length)return;

    activeProjectKey=projectKey;
    activeImageIndex=0;

    if(galleryCategory){
        galleryCategory.textContent=
            project.category;
    }

    if(galleryTitle){
        galleryTitle.textContent=
            project.title;
    }

    if(galleryThumbs){
        galleryThumbs.innerHTML="";

        const fragment=
            document.createDocumentFragment();

        images.forEach((src,index)=>{
            const thumbnail=
                document.createElement("button");

            const image=
                document.createElement("img");

            thumbnail.type="button";
            thumbnail.className="gallery-thumb";

            thumbnail.setAttribute(
                "aria-label",
                `${project.title} image ${index+1}`
            );

            image.src=src;
            image.alt=`${project.title} ${index+1}`;
            image.loading="lazy";

            thumbnail.appendChild(image);

            thumbnail.addEventListener("click",()=>{
                activeImageIndex=index;

                setMainImage(images[index]);
                setActiveThumb(index);
            });

            fragment.appendChild(thumbnail);
        });

        galleryThumbs.appendChild(fragment);
    }

    if(galleryMainImage){
        galleryMainImage.alt=
            project.title;
    }

    setMainImage(images[0]);
    setActiveThumb(0);

    openGallery();
}


function shiftGalleryImage(direction){
    const images=getActiveImages();

    if(!images.length)return;

    activeImageIndex=
        (
            activeImageIndex+
            direction+
            images.length
        )%images.length;

    setMainImage(
        images[activeImageIndex]
    );

    setActiveThumb(
        activeImageIndex
    );
}


// PROJECT CARDS
document.querySelectorAll(".project-card").forEach(card=>{
    card.addEventListener("click",()=>{
        const key=card.dataset.project;

        if(key&&projects[key]){
            renderGallery(key);
        }
    });
});


// CLOSE
galleryCloseButton?.addEventListener(
    "click",
    closeGallery
);

galleryOverlay?.addEventListener(
    "click",
    closeGallery
);


// ==============================
// KEYBOARD
// ==============================
document.addEventListener("keydown",event=>{

    // GALLERY FIRST
    if(galleryModal?.classList.contains("active")){

        if(event.key==="Escape"){
            closeGallery();
        }

        if(event.key==="ArrowRight"){
            shiftGalleryImage(1);
        }

        if(event.key==="ArrowLeft"){
            shiftGalleryImage(-1);
        }

        return;
    }

    // HERO
    if(!heroIsVisible())return;

    if(
        event.key==="ArrowRight"||
        event.key==="ArrowDown"
    ){
        if(heroIndex<heroCards.length-1){
            event.preventDefault();
            changeHero(1);
        }
    }

    if(
        event.key==="ArrowLeft"||
        event.key==="ArrowUp"
    ){
        if(heroIndex>0){
            event.preventDefault();
            changeHero(-1);
        }
    }
});