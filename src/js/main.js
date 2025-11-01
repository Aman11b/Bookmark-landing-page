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

const featureContent = [
  {
    id: 0,
    h2: "Bookmark in one click",
    p: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    id: 1,
    h2: "Intelligent search",
    p: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks. ",
  },
  {
    id: 2,
    h2: "Share your bookmarks",
    p: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

const featureImage = document.getElementById("js-features-image");
const featureHeading = document.getElementById("js-features-heading");
const featureParagraph = document.getElementById("js-features-paragraph");
const buttons = document.querySelectorAll(".button");
// console.log(buttons);
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("border-b-4", "border-Red-400");
    });
    button.classList.add("border-b-4", "border-Red-400");
    featureImage.src = `/images/illustration-features-tab-${[index + 1]}.svg`;
    featureHeading.textContent = featureContent[index].h2;
    featureParagraph.textContent = featureContent[index].p;
  });
});
