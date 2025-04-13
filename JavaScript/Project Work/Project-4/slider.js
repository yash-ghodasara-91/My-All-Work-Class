const slides = document.querySelectorAll(".slide");

let counter = 0;

// Set initial position of slides
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`; 
});

function prev() {
    if (counter > 0) {
        counter--;
    }
    slideImage();
}

function next() {
    if (counter < slides.length - 1) {
        counter++;
    }
    slideImage();
}

function slideImage() {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}
