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

const faqContent = [
  {
    question: "What is Bookmark?",
    answer:
      "Bookmark is a simple browser extension that helps you save, organize, and access your favorite websites in one click. It features drag-and-drop organization, cloud sync, and a clean interface so your links are always easy to find.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "To suggest support for a new browser, visit the Extensions page and click 'Suggest a Browser'. We review all requests regularly and notify you when support becomes available.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Yes! Bookmark has mobile apps for Android and iOS that sync with your desktop extension. You can save, view, and manage your bookmarks anytime, anywhere — even offline.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Bookmark works with Chrome and most Chromium-based browsers like Edge, Brave, and Opera. If your browser isn’t supported yet, let us know — we’re adding new ones regularly.",
  },
];

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

const featureImage = document.getElementById("js-features-image");
const featureHeading = document.getElementById("js-features-heading");
const featureParagraph = document.getElementById("js-features-paragraph");
const buttons = document.querySelectorAll(".button");
// console.log(buttons);
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("border-b-4", "border-Red-400");
      btn.classList.remove("md:border-b-4", "md:border-Red-400");
    });
    button.classList.add("border-b-4", "border-Red-400");
    featureImage.src = `/images/illustration-features-tab-${[index + 1]}.svg`;
    featureHeading.textContent = featureContent[index].h2;
    featureParagraph.textContent = featureContent[index].p;
  });
});

const faqContainer = document.getElementById("faqContainer");
faqContent.forEach((item) => {
  const faqItem = document.createElement("div");
  faqItem.classList = "faq-item border-b-2 border-gray-300 py-3";
  faqItem.innerHTML = ` 
    <div class="flex flex-col gap-4 ">
      <div class="flex flex-row justify-between w-full cursor-pointer">
        <h2 class="text-lg md:text-xl lg:text-2xl font-semibold text-Blue-950 hover:text-Red-400 ">
          ${item.question}
        </h2>
        <button class="text-Blue-600 transition-transform duration-300 faq-button cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
            <path
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              d="M1 1l8 8 8-8"
              class="transition-transform duration-300"
            />
          </svg>
        </button>
      </div>
      <div class="hidden faq-answer text-gray-400 font-bold lg:text-2xl md:text-xl text-[16px]">
        <p>
          ${item.answer}
        </p>
      </div>
    </div>`;

  faqContainer.appendChild(faqItem);
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const faqButton = item.querySelector(".faq-button");
  const faqAnswer = item.querySelector(".faq-answer");
  const faqArrow = faqButton.querySelector("svg");

  faqButton.addEventListener("click", () => {
    faqAnswer.classList.toggle("hidden");
    faqArrow.classList.toggle("rotate-180");
    faqButton.classList.toggle("text-red-400");
  });
});
