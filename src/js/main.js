const btn = document.getElementById("menu-btn");
const hamburger = btn.querySelector(".icon-hamburger");
const close = btn.querySelector(".icon-close");
const nav = document.getElementById("menu");

const logoDefault = document.querySelector(".logo-default");
const logoMobile = document.querySelector(".logo-mobile");

btn.addEventListener("click", () => {
  hamburger.classList.toggle("hidden");
  close.classList.toggle("hidden");
  logoDefault.classList.toggle("hidden");
  logoMobile.classList.toggle("hidden");
  nav.classList.toggle("hidden");
});
