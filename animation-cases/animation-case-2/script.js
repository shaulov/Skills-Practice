const menu = document.querySelector('.menu');
const burgerBtn =  document.querySelector('.burger');
const slides = document.querySelectorAll('.slider__item');
const sliderPrevBtn = document.querySelector('.slider__btn--prev');
const sliderNextBtn = document.querySelector('.slider__btn--next');
let counter = 0;

slides[counter].classList.add('slider__item--current');

const isFirst = (counter) => {
    if (counter === 0) {
        sliderPrevBtn.setAttribute('disabled', 'disabled');
    } else {
        sliderPrevBtn.removeAttribute('disabled');
    }
};

const isLast = (counter) => {
  if (counter === slides.length - 1) {
      sliderNextBtn.setAttribute('disabled', 'disabled');
  } else {
      sliderNextBtn.removeAttribute('disabled');
  }
};

burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
});

sliderPrevBtn.addEventListener('click', () => {
    slides[counter].classList.remove('slider__item--current');

    counter--;
    isFirst(counter);
    isLast(counter);

    slides[counter].classList.add('slider__item--current');
    slides[counter].removeAttribute('style');
});

sliderNextBtn.addEventListener('click', () => {
    slides[counter].classList.remove('slider__item--current');
    slides[counter].setAttribute('style', 'transform: translateX(0%)');

    counter++;
    isFirst(counter);
    isLast(counter);

    slides[counter].classList.add('slider__item--current');
});