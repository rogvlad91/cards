

function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide') /*в строковом формате получаем каждый из слайдов */

slides[activeSlide].classList.add('active')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}
}

slidesPlugin(4)