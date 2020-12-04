var navbar = document.querySelector(".navbar");
var ham = document.querySelector(".ham");
var tel = document.querySelector('.carousel-tel');
function toggleHamburger() {
    navbar.classList.toggle("showNav")
    ham.classList.toggle("showClose")
    tel.classList.toggle('')
};

ham.addEventListener("click", toggleHamburger)
if 

var menuLinks = document.querySelectorAll(".menuLink");
menuLinks.forEach(
    function (menuLink) {
        menuLink.addEventListener("click", toggleHamburger)
    }
)