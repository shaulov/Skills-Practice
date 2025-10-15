const menu = document.querySelector('.menu');
const burgerBtn =  document.querySelector('.burger');

burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
});