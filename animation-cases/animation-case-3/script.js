const header = document.querySelector('.header');
const backscrolledHeader = document.querySelector('.header__backscrolled');
const progressBar = document.querySelector('.progress-bar__value');
const maxScrollValue = document.body.scrollHeight - window.innerHeight - header.offsetHeight;
let scrollStarted = 0;
const scrollHeaderStarted = 400;

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