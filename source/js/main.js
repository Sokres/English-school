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



//Модальное окно

(function(){

document.addEventListener('DOMContentLoaded', function() {

  var modalButtons = document.querySelectorAll('.btn-modal'),
      overlay      = document.querySelector('.modal-js-overlay'),
      closeButtons = document.querySelectorAll('.modal-js-close');

  modalButtons.forEach(function(item){

     item.addEventListener('click', function(e) {

        e.preventDefault();

        var modalId = this.getAttribute('data-modal'),
            modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


        modalElem.classList.add('modal--active');
        overlay.classList.add('modal--active');
     });
  });


  closeButtons.forEach(function(item){

     item.addEventListener('click', function(e) {
        var parentModal = this.closest('.modal');

        parentModal.classList.remove('modal--active');
        overlay.classList.remove('modal--active');
     });

  });

   document.body.addEventListener('keyup', function (e) {
       var key = e.keyCode;

       if (key == 27) {

           document.querySelector('.modal.modal--active').classList.remove('modal--active');
           document.querySelector('.modal-overlay').classList.remove('modal--active');
       };
   }, false);

   overlay.addEventListener('click', function() {
        document.querySelector('.modal.modal--active').classList.remove('modal--active');
       this.classList.remove('modal--active');
   });

});
})();

// Для формы телеграм клаба

(function(){
  let forms = document.getElementById("formprice4Bs");
  let radio4bs = document.price4Bs.price4BsRadio.length;

  for (var i = 0; i < radio4bs; i++) {
    document.price4Bs.price4BsRadio[i].addEventListener('click',
    function() {
      forms.action = this.value;
    }
    )
  }
 // Проверка на пустоту

  forms.onsubmit = function() {
   let radioElems = document.getElementsByName('price4BsRadio'),
           error = document.querySelector('#price4BsError');
           submit = false;
       [].forEach.call(radioElems, function(item) {
         item.checked && (submit = true);
       });

       if (!submit) {
         error.style.display = 'block';
         return false;
       }
     }

  })();

   //Отбивка

  (function(){
    let forms = document.getElementById("formprice12Bs");
    let radio12bs = document.price12Bs.price12BsRadio.length;

    for (var i = 0; i < radio12bs; i++) {
      document.price12Bs.price12BsRadio[i].addEventListener('click',
      function() {
        forms.action = this.value;
      }
      )
    }
   // Проверка на пустоту

    forms.onsubmit = function() {
     let radioElems = document.getElementsByName('price12BsRadio'),
             error = document.querySelector('#price12BsError');
             submit = false;
         [].forEach.call(radioElems, function(item) {
           item.checked && (submit = true);
         });

         if (!submit) {
           error.style.display = 'block';
           return false;
         }
       }
  })();

  (function(){
    let forms = document.getElementById("formprice24Bs");
    let radio24bs = document.price24Bs.price24BsRadio.length;

    for (var i = 0; i < radio24bs; i++) {
      document.price24Bs.price24BsRadio[i].addEventListener('click',
      function() {
        forms.action = this.value;
      }
      )
    }
   // Проверка на пустоту

    forms.onsubmit = function() {
     let radioElems = document.getElementsByName('price24BsRadio'),
             error = document.querySelector('#price24BsError');
             submit = false;
         [].forEach.call(radioElems, function(item) {
           item.checked && (submit = true);
         });

         if (!submit) {
           error.style.display = 'block';
           return false;
         }
       }
  })();

  (function(){
    let forms = document.getElementById("formprice4Os");
    let radio4Os = document.price4Os.price4OsRadio.length;

    for (var i = 0; i < radio4Os; i++) {
    document.price4Os.price4OsRadio[i].addEventListener('click',
        function() {
          forms.action = this.value;
        }
        )
      }
     // Проверка на пустоту

      forms.onsubmit = function() {
       let radioElems = document.getElementsByName('price4OsRadio'),
               error = document.querySelector('#price4OsError');
               submit = false;
           [].forEach.call(radioElems, function(item) {
             item.checked && (submit = true);
           });

           if (!submit) {
             error.style.display = 'block';
             return false;
           }
         }
    })();


  (function(){
    let forms = document.getElementById("formprice12Os");
    let radio12Os = document.price12Os.price12OsRadio.length;

    for (var i = 0; i < radio12Os; i++) {
    document.price12Os.price12OsRadio[i].addEventListener('click',
        function() {
          forms.action = this.value;
        }
        )
      }
     // Проверка на пустоту

      forms.onsubmit = function() {
       let radioElems = document.getElementsByName('price12OsRadio'),
               error = document.querySelector('#price12OsError');
               submit = false;
           [].forEach.call(radioElems, function(item) {
             item.checked && (submit = true);
           });

           if (!submit) {
             error.style.display = 'block';
             return false;
           }
         }
    })();

  (function(){
    let forms = document.getElementById("formprice24Os");
    let radio24Os = document.price24Os.price24OsRadio.length;


    for (var i = 0; i < radio24Os; i++) {
    document.price24Os.price24OsRadio[i].addEventListener('click',
        function() {
          forms.action = this.value;
        }
        )
      }
     // Проверка на пустоту

      forms.onsubmit = function() {
       let radioElems = document.getElementsByName('price24OsRadio'),
               error = document.querySelector('#price24OsError');
               submit = false;
           [].forEach.call(radioElems, function(item) {
             item.checked && (submit = true);
           });

           if (!submit) {
             error.style.display = 'block';
             return false;
           }
         }
    })();

