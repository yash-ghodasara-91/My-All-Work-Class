const imgs = document.querySelectorAll('.header-slider img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0;
let sliderInterval;

function changeSlider() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

function startAutoSlider() {
    sliderInterval = setInterval(() => {
        n = (n + 1) % imgs.length;  
        changeSlider();
    }, 3000); 
}

window.addEventListener('DOMContentLoaded', () => {
    changeSlider();
    startAutoSlider(); 

    prev_btn.addEventListener('click', () => {
        clearInterval(sliderInterval); 
        if (n > 0) {
            n--;
        } else {
            n = imgs.length - 1;
        }
        changeSlider();
        startAutoSlider(); 
    });

    next_btn.addEventListener('click', () => {
        clearInterval(sliderInterval);  
        if (n < imgs.length - 1) {
            n++;
        } else {
            n = 0;
        }
        changeSlider();
        startAutoSlider(); 
    });
});


// toggal menu button JS


const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); 
    navLinks.classList.toggle('active');
});

navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
    }
});

document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});


