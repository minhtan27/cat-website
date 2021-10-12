// ======= varible declaration ========
const navbar = document.querySelector("nav");
const getSomeFactsText = document.querySelector(".f-s-d-text");
const getSomeFactsImg = document.querySelector(".facts-sec-img-container img");
const getSomeFactsBtn = document.querySelector(".f-s-d-button");
const getCatGalleryTitle = document.querySelector(".c-g-c-title");
const getCatGalleryImgs = document.querySelector(".c-g-c-imgs");

let responseFactsText = "";

// ======= event listener ========
document.addEventListener("DOMContentLoaded", () => {
  apiCallFactsText(renderGetSomeFactsText);
  apiCallFactsText(renderGalleryQuoteText);
  apiCallCatGifs(renderGetSomeFactsGif);
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 20) {
    navbar.classList.add("nav-display");
  } else {
    navbar.classList.remove("nav-display");
  }
});

getSomeFactsBtn.addEventListener("click", () => {
  apiCallFactsText(renderGetSomeFactsText);
  apiCallCatGifs(renderGetSomeFactsGif);
  onclickIncreaseBtnSize(getSomeFactsBtn, "f-s-d-button-onclick");
});
// ======= function ========
function renderGetSomeFactsText(text) {
  getSomeFactsText.innerHTML = `
  <i>"${text}"</i>
   `;
}

function renderGalleryQuoteText(text) {
  getCatGalleryTitle.innerHTML = `
    <h2>exploring more cat pics</h2>
    <p><i>" ${text}"</i></p>
  `;
}

function renderGalleryPic(arr) {
  getCatGalleryImgs.innerHTML = `
                            <div class="c-g-c-img-container">
                                <img src="./img/g1.jpg" />
                            </div>
                            <div class="c-g-c-img-container">
                                <img src="./img/g2.jpg" />
                            </div>
                            <div class="c-g-c-img-container">
                                <img src="./img/g3.jpg" />
                            </div>
                            <div class="c-g-c-img-container">
                                <img src="./img/g4.jpg" />
                            </div>
                            <div class="c-g-c-img-container">
                                <img src="./img/g5.jpg" />
                            </div>
                            <div class="c-g-c-img-container">
                                <img src="./img/g6.jpg" />
                            </div>
                            <div class="c-g-c-img-container">
                                <img src="./img/g7.jpg" />
                            </div>
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

// ======= JSON object ========

// ======= api call ========
function apiCallFactsText(callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let response = JSON.parse(this.responseText);
    responseFactsText = response.text;
    callback(responseFactsText);
  };
  xhttp.open(
    "GET",
    "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1",
    true
  );
  xhttp.send();
}

function apiCallCatGifs(callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let response = JSON.parse(this.responseText);
    let random = Math.floor(Math.random() * response.length);
    console.log(response[random].id);
    callback(response[random].id);
  };
  xhttp.open("GET", "https://cataas.com/api/cats?tags=gif");
  xhttp.send();
}

// function apiCallGalleryImgs() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onload = function () {
//     let response = JSON.parse(this.response);
//     console.log(response);
//   };
//   xhttp.open("GET", "https://cataas.com/api/cats?&limit=10");
//   xhttp.send();
// }

// apiCallGalleryImgs();
