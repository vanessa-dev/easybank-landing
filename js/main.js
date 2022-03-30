//Menu
let menu_hambuguer = document.querySelector(".header__menu-mobile");
let menu = document.querySelector(".header__menu-desk");

function abrirMenu () {
  menu.classList.toggle("mobile-ativo");
};
menu_hambuguer.addEventListener("click", abrirMenu);

