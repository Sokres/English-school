//Кнопка для оплаты
(function(){
  let btnPricePayS = document.getElementById("btnPricePayS");
  let radioLen = document.Price_s.price_lvl_s.length;

for (let i = 0; i < radioLen; i++) {
document.Price_s.price_lvl_s[i].addEventListener('click',
    function() {
      btnPricePayS.dataset.modal = this.value;
    }
);
}})();

(function(){
  let btnPricePayM = document.getElementById("btnPricePayM"),
radioLen = document.Price_m.price_lvl_m.length;

for (let i = 0; i < radioLen; i++) {
document.Price_m.price_lvl_m[i].addEventListener('click',
    function() {
      btnPricePayM.dataset.modal = this.value;
    }
);
}})();

(function(){
  let btnPricePayXL = document.getElementById("btnPricePayXL"),
radioLen = document.Price_xl.price_lvl_xl.length;

for (let i = 0; i < radioLen; i++) {
document.Price_xl.price_lvl_xl[i].addEventListener('click',
    function() {
      btnPricePayXL.dataset.modal = this.value;
    }
);
}})();

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

// Кнопка 7 дней бесплатно

(function(){
    const toggle = document.getElementById('seven-link_one')
    const content = document.getElementById('seven-content_one')

  const show = () => {
    toggle.setAttribute('aria-expanded', true)
    content.setAttribute('aria-hidden', false)

  }

  const hide = () => {
    toggle.setAttribute('aria-expanded', false)
    content.setAttribute('aria-hidden', true)

  }
  toggle.addEventListener('click', event => {
    event.stopPropagation()
    JSON.parse(toggle.getAttribute('aria-expanded')) ? hide() : show()
  })

  const handleClosure = event => !content.contains(event.target) && hide()


  window.addEventListener('click', handleClosure)
  window.addEventListener('focusin', handleClosure)

})();

(function(){
    const toggleTwo = document.getElementById('seven-link_two')
    const contentTwo = document.getElementById('seven-content_two')

  const show = () => {
    toggleTwo.setAttribute('aria-expanded', true)
    contentTwo.setAttribute('aria-hidden', false)
  }

  const hide = () => {

    toggleTwo.setAttribute('aria-expanded', false)
    contentTwo.setAttribute('aria-hidden', true)

  }


  toggleTwo.addEventListener('click', event => {
    event.stopPropagation()
    JSON.parse(toggleTwo.getAttribute('aria-expanded')) ? hide() : show()
  })

  const handleClosureTwo = event => !contentTwo.contains(event.target) && hide()



  window.addEventListener('click', handleClosureTwo)
  window.addEventListener('focusin', handleClosureTwo)
})();
(function(){

    const toggleThree = document.getElementById('seven-link_three')
    const contentThree = document.getElementById('seven-content_three')

  const show = () => {
    toggleThree.setAttribute('aria-expanded', true)
    contentThree.setAttribute('aria-hidden', false)
  }

  const hide = () => {
    toggleThree.setAttribute('aria-expanded', false)
    contentThree.setAttribute('aria-hidden', true)
  }
  toggleThree.addEventListener('click', event => {
    event.stopPropagation()
    JSON.parse(toggleThree.getAttribute('aria-expanded')) ? hide() : show()
  })

  const handleClosureThree = event => !contentThree.contains(event.target) && hide()

  window.addEventListener('click', handleClosureThree)
  window.addEventListener('focusin', handleClosureThree)
})();

