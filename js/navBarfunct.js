window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add("navbar-contraido");
  } else {
      navbar.classList.remove("navbar-contraido");
  }
}
