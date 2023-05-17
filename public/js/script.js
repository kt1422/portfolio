var navbar = document.querySelector('.mynav');
var home = document.querySelector('.home-page');
var tech = document.querySelector('.tech-page');
var project = document.querySelector('.project-page');
var work = document.querySelector('.work-page');
var contact = document.querySelector('.contact-page');

window.onscroll = function() {

    // pageYOffset or scrollY
    if (window.pageYOffset > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    if (window.pageYOffset >= 0 && window.pageYOffset < 700) {
        home.classList.add('active');
    } else {
        home.classList.remove('active');
    }

    if (window.pageYOffset >= 700 && window.pageYOffset < 1400) {
        tech.classList.add('active');
    } else {
        tech.classList.remove('active');
    }

    if (window.pageYOffset >= 1400 && window.pageYOffset < 2100) {
        project.classList.add('active');
    } else {
        project.classList.remove('active');
    }

    if (window.pageYOffset >= 2100 && window.pageYOffset < 2800) {
        work.classList.add('active');
    } else {
        work.classList.remove('active');
    }
    if (window.pageYOffset >= 2800) {
        contact.classList.add('active');
    } else {
        contact.classList.remove('active');
    }
}