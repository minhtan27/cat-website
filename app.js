// ======= varible declaration ========
// global

// nav bar
const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navLinksContainer = document.querySelector(".nav-links-container");

// get some fact section
const getSomeFactsText = document.querySelector(".f-s-d-text");
const getSomeFactsImg = document.querySelector(".facts-sec-img-container img");
const getSomeFactsBtn = document.querySelector(".f-s-d-button");

// cat gallery section
const getCatGalleryTitle = document.querySelector(".c-g-c-title");
const getCatGalleryImgs = document.querySelectorAll(".gallery-img");

// ======= event listener ========
// global
document.addEventListener("DOMContentLoaded", () => {
  apiCallFactsText(renderGetSomeFactsText);
  apiCallFactsText(renderGalleryQuoteText);
  apiCallCatGifs(renderGetSomeFactsGif);
  apiCallGalleryImgs();
});

// navbar
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 20) {
    navbar.classList.add("nav-display");
  } else {
    navbar.classList.remove("nav-display");
  }
});

navToggle.addEventListener("click", () => {
  if (navLinksContainer.getBoundingClientRect().height > 0) {
    navLinksContainer.style.height = 0;
    navbar.classList.remove("navbar-toggle");
  } else {
    displayLinks();
    navbar.classList.add("navbar-toggle");
  }
});

// get some fact section
getSomeFactsBtn.addEventListener("click", () => {
  apiCallFactsText(renderGetSomeFactsText);
  apiCallCatGifs(renderGetSomeFactsGif);
  onclickIncreaseBtnSize(getSomeFactsBtn, "f-s-d-button-onclick");
});
// ======= function ========

// nav bar
function displayLinks() {
  let linksHeight = navLinks.getBoundingClientRect().height;
  navLinksContainer.style.height = `${linksHeight}px`;
}
// get some fact section
function renderGetSomeFactsText(text) {
  getSomeFactsText.innerHTML = `
  <i>"${text}"</i>
   `;
}
function renderGetSomeFactsGif(url) {
  getSomeFactsImg.src = `https://cataas.com/cat/${url}`;
}

function onclickIncreaseBtnSize(btn, styleType) {
  btn.classList.add(styleType);
  setTimeout(() => {
    btn.classList.remove(styleType);
  }, 50);
}

// gallery section
function renderGalleryQuoteText(text) {
  getCatGalleryTitle.innerHTML = `
    <h2>exploring more cat pics</h2>
    <p><i>" ${text}"</i></p>
  `;
}

// ======= api call ========
function apiCallFactsText(callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let response = JSON.parse(this.responseText);
    let responseFactsText = response.fact;
    callback(responseFactsText);
  };
  xhttp.open("GET", "https://catfact.ninja/fact", true);
  xhttp.send();
}

function apiCallCatGifs(callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let response = JSON.parse(this.responseText);
    let random = Math.floor(Math.random() * response.length);
    callback(response[random].id);
  };
  xhttp.open("GET", "https://cataas.com/api/cats?tags=gif&limit=50");
  xhttp.send();
}

function apiCallGalleryImgs() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let response = JSON.parse(this.response);
    getCatGalleryImgs.forEach((img) => {
      let random = Math.floor(Math.random() * response.length);
      let url = `https://cataas.com/cat/${response[random].id}`;
      img.src = url;
    });
  };
  xhttp.open("GET", "https://cataas.com/api/cats?limit=100");
  xhttp.send();
}
