//QUERY SELECTORS
var burgerMenu = document.querySelector("#burger-menu");
var menuMobile = document.querySelector("#menu-mobile");
var temaerMenuMobile = document.querySelector("#temaer-menu-mobile");
var temaerMenuDesktop = document.querySelector("#temaer-menu-desktop");
var temaerMenuLabelMobile = document.querySelector("#temaer-menu-label-mobile");
var temaerMenuLabelDesktop = document.querySelector("#temaer-menu-label-desktop");
var temaerMenuLabelDesktopArrow = document.querySelector("#temaer-menu-label-desktop .label-arrow");

//EVENTLISTENERS
burgerMenu.addEventListener("click", handleBurgerMenuClick);
temaerMenuLabelMobile.addEventListener("click", handleTemaerMenuClickMobile);
temaerMenuLabelDesktop.addEventListener("click", handleTemaerMenuClickDesktop);

//FUNCTIONS
function handleBurgerMenuClick() {
  if (menuMobile.classList.contains("isOpen")) {
    //luk burger menu
    menuMobile.classList.remove("isOpen");
  } else {
    //åbn burger menu
    menuMobile.classList.add("isOpen");
  }
}
function handleTemaerMenuClickMobile() {
  if (temaerMenuMobile.classList.contains("isOpen")) {
    //luk temaer menu
    temaerMenuMobile.classList.remove("isOpen");
  } else {
    //åbn temaer menu
    temaerMenuMobile.classList.add("isOpen");
  }
}
function handleTemaerMenuClickDesktop() {
  if (temaerMenuDesktop.classList.contains("isOpen")) {
    //luk temaer menu
    temaerMenuDesktop.classList.remove("isOpen");
    temaerMenuLabelDesktopArrow.classList.remove("isOpen");
  } else {
    //åbn temaer menu
    temaerMenuDesktop.classList.add("isOpen");
    temaerMenuLabelDesktopArrow.classList.add("isOpen");
  }
}
