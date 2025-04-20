const slides = document.querySelectorAll(".slide");
let counter = 0;
let autoSlider;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

function slideImage() {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

function next() {
    counter = (counter + 1) % slides.length;
    slideImage();
}

function startAutoSlider() {
    autoSlider = setInterval(() => {
        next();
    }, 3000);
}

slideImage();
startAutoSlider();
