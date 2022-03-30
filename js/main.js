//Menu
let menu_hambuguer = document.querySelector(".header__menu-mobile");
let menu = document.querySelector(".header__menu-desk");

function abrirMenu () {
  let ativo = menu.classList.toggle("mobile-ativo");
  let img = menu_hambuguer.querySelector("img");

  if (ativo) {
    img.setAttribute("src", "images/icon-close.svg");
    return;
  }

  img.setAttribute("src", "images/icon-hamburger.svg");
};
menu_hambuguer.addEventListener("click", abrirMenu);

