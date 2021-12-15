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