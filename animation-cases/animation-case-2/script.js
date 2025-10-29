const menu = document.querySelector('.menu');
const burgerBtn =  document.querySelector('.burger');
const modal = document.querySelector('.modal');
const modalWrap = document.querySelector('.modal__wrap');
const modalOpenBtn = document.querySelector('.slider__modal-btn');
const modalCloseBtn = document.querySelector('.modal__close-btn');
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

const animateIn = () => {
    modalWrap.removeEventListener('animationend', animateIn);
    modalWrap.classList.remove('modal-in');
};

const animateOut = () => {
    modalWrap.removeEventListener('animationend', animateOut);
    modalWrap.classList.remove('modal-out');
    modal.classList.remove('modal--open');
};

const handleOpenModal = () => {
    modalWrap.addEventListener('animationend', animateIn);
    modal.classList.add('modal--open');
    modalWrap.classList.add('modal-in');
};

const handleCloseModal = () => {
    modalWrap.addEventListener('animationend', animateOut);
    modalWrap.classList.add('modal-out');
};

modalOpenBtn.addEventListener('click', handleOpenModal);
modalCloseBtn.addEventListener('click', handleCloseModal);
document.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape') {
        handleCloseModal();
    }
});