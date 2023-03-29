var navbar = document.querySelector('.mynav')
window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 100) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}