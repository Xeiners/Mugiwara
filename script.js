const rotateBtn = document.querySelector('.rotate-btn');
const slides = document.querySelectorAll('.back');
const totalSlides = slides.length;
let index = 0;

rotateBtn.addEventListener('click', () => {
   rotateBtn.classList.add('active');
    setTimeout(() => {
        rotateBtn.classList.remove('active');
    }, 1500)

    slides.forEach(slides => {
        if (slides.classList.contains('active')) {
            slides.classList.add('after-active');
        }
        else {
            slides.classList.remove('after-active');
        }
    })

    slides[index].classList.remove('active');

    index++;

    if (index == totalSlides) {
        index = 0;
    }

    slides[index].classList.add('active');

})