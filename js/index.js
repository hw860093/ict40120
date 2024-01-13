//Dropdown list function
document.getElementById('menu').addEventListener('change', function () {
    const navList = document.querySelector('nav ul');
    navList.classList.toggle('show', this.checked);
});


// Slider function
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(slideIndex) {
    slides.forEach(function(slide){
        slide.classList.remove('active');
    });

    slides[slideIndex].classList.add('active');
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function startSlideshow() {
    setInterval(nextSlide, 3000);
}

startSlideshow();
// End of slider function

