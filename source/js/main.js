(function(){
  var menuLvl = document.querySelector('.site-list__item--down');
var menuLvlClick = document.querySelector('.site-list__link-subdmenu');
var navMain = document.querySelector('.bd');
var navToggle = document.querySelector('.main-nav__btn');
/*Menu*/
menuLvlClick.addEventListener('click', function() {
  if (menuLvl.classList.contains('site-list__item--down-close')) {
  menuLvl.classList.remove('site-list__item--down-close');
  menuLvl.classList.add('site-list__item--down-open');
} else {
  menuLvl.classList.add('site-list__item--down-close');
  menuLvl.classList.remove('site-list__item--down-open');
}
});

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('close')) {
    navMain.classList.remove('close');
    navMain.classList.add('open');
  } else {
    navMain.classList.add('close');
    navMain.classList.remove('open');
  }
});
console.log('helo');
})();


//Липкое меню//

// (function() {

//   var section = document.querySelectorAll(".section-menu");
//   var sections = {};
//   var i = 0;

//   Array.prototype.forEach.call(section, function(e) {
//     sections[e.id] = e.offsetTop;
//   });

//   window.onscroll = function() { theyFunction();
//     var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

//     for (i in sections) {
//       if (sections[i] <= scrollPosition) {
//         document.querySelector('.welcome-info__submenu--active').setAttribute('class', 'welcome-info__link');
//         document.querySelector('.welcome-info__link[href*=' + i + ']').setAttribute('class', 'welcome-info__submenu--active');
//       }
//     }
//   };
//   // window.onscroll = function() {myFunction()};
//   var navbar = document.getElementById("stickSubmenu");
//   var wrapnav = document.getElementById("stick");
//   var sticky = navbar.offsetTop;
//   function theyFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("welcome-info__submenu--stick");
//     wrapnav.classList.add("menu-stick");

//   } else {
//     navbar.classList.remove("welcome-info__submenu--stick");
//     navbar.classList.remove("menu-stick");
//   }
// }
// })();


//Скрипт для программы курсов
(function(){
  var accordeonProgramm = document.getElementsByClassName("programm__btn");
  var i;

  for (i = 0; i < accordeonProgramm.length; i++) {
    accordeonProgramm[i].addEventListener("click", function() {
      this.classList.toggle("programm__btn--active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
})();

// Оптимизация изображений Lazy loading


document.addEventListener("DOMContentLoaded", function(event) {
  var lazyImages =[].slice.call(
   document.querySelectorAll(".lazy > source")
  )

  if ("IntersectionObserver" in window && 'IntersectionObserverEntry' in window) {
     let lazyImageObserver =
      new IntersectionObserver(function(entries, observer) {
         entries.forEach(function(entry) {
          if (entry.isIntersecting) {
             let lazyImage = entry.target;
             lazyImage.srcset = lazyImage.dataset.srcset;
             lazyImage.nextElementSibling.srcset = lazyImage.dataset.srcset;
             lazyImage.nextElementSibling.classList.add('fade-in');
             lazyImage.parentElement.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
           }
        });
       });

     lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
     });
  } else {

    // Not supported, load all images immediately
    let active = false;

    const lazyLoad = function() {
      if (active === false) {
        active = true;
        setTimeout(function() {
          lazyImages.forEach(function(lazyImage) {
            if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
              lazyImage.srcset = lazyImage.dataset.srcset;
              lazyImage.nextElementSibling.src = lazyImage.dataset.srcset;
              lazyImage.nextElementSibling.classList.add('fade-in');
              lazyImage.parentElement.classList.remove("lazy");

              lazyImages = lazyImages.filter(function(image) {
                return image !== lazyImage;
              });

              if (lazyImages.length === 0) {
                document.removeEventListener("scroll", lazyLoad);
                window.removeEventListener("resize", lazyLoad);
                window.removeEventListener("orientationchange", lazyLoad);
              }
            }
          });

          active = false;
        }, 200);
      }
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
   }

 });



