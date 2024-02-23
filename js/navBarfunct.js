window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("navbar-contraido");
        navbar.classList.remove("navbar-expandido");
    } else {
        navbar.classList.remove("navbar-contraido");
        navbar.classList.add("navbar-expandido");
    }
}

/*MENU SCROLLABLE*/

document.addEventListener('DOMContentLoaded', function() {
    const scrollbar = document.querySelector('.scrollbar');
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', function() {
      const scrollY = window.scrollY;
      sections.forEach((section, index) => {
        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.clientHeight;
        if (scrollY >= offsetTop && scrollY < offsetBottom) {
          scrollbar.style.top = `${section.offsetTop}px`;
        }
      });
    });
  });
  
