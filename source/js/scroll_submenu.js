(function() {
  'use strict';

  var section = document.querySelectorAll(".section-menu");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() { myFunction();
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.welcome-info__submenu--active').setAttribute('class', 'welcome-info__link');
        document.querySelector('.welcome-info__link[href*=' + i + ']').setAttribute('class', 'welcome-info__submenu--active');
      }
    }
  };
  // window.onscroll = function() {myFunction()};
  var navbar = document.getElementById("stickSubmenu");
  var wrapnav = document.getElementById("stick");
  var sticky = navbar.offsetTop;
  function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("welcome-info__submenu--stick")
    wrapnav.classList.add("menu-stick")

  } else {
    navbar.classList.remove("welcome-info__submenu--stick")
    navbar.classList.remove("menu-stick");
  }
}
})();
