const header = document.querySelector('.header');
const backscrolledHeader = document.querySelector('.header__backscrolled');
const progressBar = document.querySelector('.progress-bar__value');
const maxScrollValue = document.body.scrollHeight - window.innerHeight - header.offsetHeight;
let scrollStarted = 0;
const scrollHeaderStarted = 400;

const contentBlocks = document.querySelectorAll('.content__block');

const handleScroll = () => {
  const scrollTop = window.scrollY;
  const progressValue = scrollTop/ maxScrollValue;
  const delta = scrollTop - scrollStarted;

  progressBar.style.transform = `scaleX(${progressValue})`;

  if (scrollTop >= scrollHeaderStarted) {
      header.classList.add('header--fixed');
  } else {
      header.classList.remove('header--fixed');
  }

  if ((delta < 0) && (scrollTop >= scrollHeaderStarted)) {
      backscrolledHeader.classList.add('header__backscrolled--shown');
  } else {
      backscrolledHeader.classList.remove('header__backscrolled--shown');
  }

  scrollStarted = scrollTop;
};

document.addEventListener('scroll', handleScroll);

// Классический вриант с eventListener
// const handleElementVisibility = (element) => {
//     const rect = element.getBoundingClientRect();
//     const halfHeight = rect.height / 2;
//     const viewportHeight = window.innerHeight;
//
//     if (rect.top <= viewportHeight - halfHeight && rect.bottom >= halfHeight) {
//         element.classList.add('content__block--shown');
//     }
// }
// window.addEventListener('scroll', () => contentBlocks.forEach(handleElementVisibility));

// Интересный вариант с обзёрвером, но работает не совсем так как надо
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('content__block--shown');

                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.5 }
);

contentBlocks.forEach(el => observer.observe(el));