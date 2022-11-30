// let fromClose = document.querySelector('.banner');
var menu = document.querySelector('.menu__bar');
var headerMenu = document.querySelector('.header__menu');


menu.addEventListener('click', () => {
  headerMenu.classList.toggle('active');
})