//Animation for hamburger menu show/hide
var hamburger = document.querySelector(".hamburger");
var topNav = document.getElementById("myTopNav");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  if (topNav.className === "topNav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topNav";
  }
});

//Autoscroll functionality
function autoScroll(selector) {
  document.querySelector(selector).scrollIntoView({
    behavior: "smooth"
  });
}
