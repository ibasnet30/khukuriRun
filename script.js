const menuButton = document.getElementById("menuButton");

const navLinks = document.getElementById("navLinks");

const year = document.getElementById("year");


/* MOBILE NAVIGATION */

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


/* CLOSE MENU WHEN A LINK IS CLICKED */

const navigationLinks = navLinks.querySelectorAll("a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


/* FOOTER YEAR */

year.textContent = new Date().getFullYear();