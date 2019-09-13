const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar-links");

hamburger.addEventListener("click", function(e) {
  e.preventDefault();
  navbar.classList.toggle("active");
});
