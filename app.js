// ======= varible declaration ========
const navbar = document.querySelector("nav");
const getSomeFactsText = document.querySelector(".f-s-d-text");
const getSomeFactsImg = document.querySelector(".facts-sec-img-container img");
const getCatGalleryTitle = document.querySelector(".c-g-c-title");
const getSomeFactsBtn = document.querySelector(".f-s-d-button");

// ======= event listener ========
document.addEventListener("DOMContentLoaded", () => {
  getSomeFactsSec();
  getSomeFactsPic();
  getGallerySecQuotes();
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    navbar.classList.add("nav-display");
  } else {
    navbar.classList.remove("nav-display");
  }
});

getSomeFactsBtn.addEventListener("click", () => {
  getSomeFactsSec();
  getSomeFactsPic();
  onclickIncreaseBtnSize(getSomeFactsBtn, "f-s-d-button-onclick");
});
// ======= function ========
function renderGetSomeFactsText(text) {
  getSomeFactsText.innerHTML = `
  <p>"${text}"</p>
   `;
}

function renderGalleryQuoteText(text) {
  getCatGalleryTitle.innerHTML = `
    <h2>exploring more cat pics</h2>
    <p><i>" ${text}"</i></p>
  `;
}

function onclickIncreaseBtnSize(btn, styleType) {
  btn.classList.add(styleType);
  setTimeout(() => {
    btn.classList.remove(styleType);
  }, 50);
}

// ======= object ========

// ======= api call ========
function getSomeFactsSec() {
  const xhttp = new XMLHttpRequest();

  xhttp.onload = function () {
    let response = JSON.parse(this.responseText);
    renderGetSomeFactsText(response.text);
  };
  xhttp.open(
    "GET",
    "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1",
    true
  );
  xhttp.send();
}

function getSomeFactsPic() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    let response = JSON.parse(this.response);
    let url = `https://cataas.com${response.url}`;
    getSomeFactsImg.src = url;
  };
  xhttp.open("GET", "https://cataas.com/cat?json=true");
  xhttp.send();
}

function getGallerySecQuotes() {
  const xhttp = new XMLHttpRequest();

  xhttp.onload = function () {
    let response = JSON.parse(this.responseText);
    renderGalleryQuoteText(response.text);
  };
  xhttp.open(
    "GET",
    "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1",
    true
  );
  xhttp.send();
}
