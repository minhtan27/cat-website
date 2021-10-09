// ======= varible declaration ========
const navbar = document.querySelector("nav");

// ======= event listener ========
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    navbar.classList.add("nav-display");
  } else {
    navbar.classList.remove("nav-display");
  }
});

// ======= function ========
// ======= object ========
