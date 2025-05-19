let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// Adaugă funcția pentru animatie slide out to left
function animateSlideOutLeft(slide) {
    slide.classList.add("exit-left");
    setTimeout(() => {
        slide.classList.remove("exit-left");
        slide.style.display = "none";
    }, 700); // durata animatiei din CSS
}

function showSlides(n) {
    let lastIndex = slideIndex;
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    // Animatie de iesire pentru slide-ul curent
    for (let i = 0; i < slides.length; i++) {
        if (i === lastIndex && i !== slideIndex && slides[i].style.display === "block") {
            animateSlideOutLeft(slides[i]);
        } else {
            slides[i].style.display = "none";
            slides[i].classList.remove("exit-left");
        }
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

prev.onclick = () => plusSlides(-1);
next.onclick = () => plusSlides(1);
for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = () => currentSlide(i);
}

function autoSlide() {
    slideIndex++;
    showSlides(slideIndex);
    setTimeout(autoSlide, 4000);
}

showSlides(slideIndex);
setTimeout(autoSlide, 4000);