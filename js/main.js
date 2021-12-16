window.onscroll = function() {hasScrolled()};

function hasScrolled() {
    const navigation = document.querySelector(".nav");

    if (window.pageYOffset != 0) {
        if (!navigation.classList.contains("scrolled")) {
            document.querySelector(".nav").classList.add("scrolled");
        }
    } else {
        document.querySelector(".nav").classList.remove("scrolled");
    }
}




const filterBtns = document.querySelectorAll(".event-filter-btn");

function hideHidden() {
    document.querySelectorAll(".event-item").forEach(event => {
        if (event.classList.contains("hidden")) {
            event.style.display = "none";
        } else {
            event.style.display = "";
        }
    });
}

function changeEventFilter() {
    const target = window.event.target;
    const type = target.getAttribute("data-type");

    filterBtns.forEach(btn => {
        btn.classList.remove("selected");
    });

    target.classList.add("selected");

    document.querySelectorAll(".event-item").forEach(event => {
        if (type === "all") {
            event.classList.remove("hidden");
            event.style.display = "";
        } else if (type != event.getAttribute("data-type")) {
            event.classList.add("hidden");
        }
    });

    setTimeout(hideHidden, 300);
}



filterBtns.forEach(btn => {
    btn.addEventListener("click", changeEventFilter);
});

window.onscroll = function() {hasScrolled()};

function hasScrolled() {
    const navigation = document.querySelector("nav");

    if (window.pageYOffset != 0) {
        if (!navigation.classList.contains("scrolled")) {
            document.querySelector("nav").classList.add("scrolled");
        }
    } else {
        document.querySelector("nav").classList.remove("scrolled");
    }
}


const arrows = document.querySelectorAll(".arrow");

arrows.forEach(arrow => {
    arrow.addEventListener("click", changeSlide);
});

let currentSlide = 0;
let maxSlides = document.querySelectorAll(".event-item").length;

function changeSlide() {
    const arrowTarget = Number(window.event.target.getAttribute("data-value"));

    currentSlide += arrowTarget;

    if (currentSlide > maxSlides) {
        currentSlide = maxSlides;
    }

    if (currentSlide < 0) {
        currentSlide = 0;
    }

    if (currentSlide > 0) {
        document.querySelector(".arrow-left").classList.remove("hidden");
    }
    if (currentSlide == 0) {
        document.querySelector(".arrow-left").classList.add("hidden");
    }
    
    if (window.innerWidth <= 640) {
        if (currentSlide >= maxSlides - 1) {
            document.querySelector(".arrow-right").classList.add("hidden");
        }
        if (currentSlide < maxSlides - 1) {
            document.querySelector(".arrow-right").classList.remove("hidden");
        }

        const slider = document.querySelector(".events-slider");
        slider.style.right = `calc(100% * ${currentSlide})`;
    } else {
        if (currentSlide >= maxSlides - 2) {
            document.querySelector(".arrow-right").classList.add("hidden");
        }
        if (currentSlide < maxSlides - 2) {
            document.querySelector(".arrow-right").classList.remove("hidden");
        }

        const slider = document.querySelector(".events-slider");
        slider.style.right = `calc(100% / 3 * ${currentSlide} + 100px * ${currentSlide})`;
    }
}

document.querySelector(".nav-hamburger").addEventListener("click", toggleNav);

function toggleNav() {
    document.querySelector(".mobile-nav").classList.toggle("shown");
}

window.onresize = function() {recalculateSlide()};

function recalculateSlide() {

    if (!document.querySelector(".arrow-right")) {
        return;
    }

    if (window.innerWidth <= 640) {
        if (currentSlide >= maxSlides - 1) {
            document.querySelector(".arrow-right").classList.add("hidden");
        }
        if (currentSlide < maxSlides - 1) {
            document.querySelector(".arrow-right").classList.remove("hidden");
        }

        const slider = document.querySelector(".events-slider");
        slider.style.right = `calc(100% * ${currentSlide})`;
    } else {
        if (currentSlide >= maxSlides - 2) {
            document.querySelector(".arrow-right").classList.add("hidden");
        }
        if (currentSlide < maxSlides - 2) {
            document.querySelector(".arrow-right").classList.remove("hidden");
        }

        const slider = document.querySelector(".events-slider");
        slider.style.right = `calc(100% / 3 * ${currentSlide} + 100px * ${currentSlide})`;
    }
}