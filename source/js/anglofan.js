//Кнопка для оплаты
(function(){
  let btnPricePayS = document.getElementById("btnPricePayS");
  let radioLen = document.Price_s.price_lvl_s.length;

for (let i = 0; i < radioLen; i++) {
document.Price_s.price_lvl_s[i].addEventListener('click',
    function() {
      btnPricePayS.name = this.value;
    }
);
}})();

(function(){
  let btnPricePayM = document.getElementById("btnPricePayM"),
radioLen = document.Price_m.price_lvl_m.length;

for (let i = 0; i < radioLen; i++) {
document.Price_m.price_lvl_m[i].addEventListener('click',
    function() {
      btnPricePayM.name = this.value;
    }
);
}})();

(function(){
  let btnPricePayXL = document.getElementById("btnPricePayXL"),
radioLen = document.Price_xl.price_lvl_xl.length;

for (let i = 0; i < radioLen; i++) {
document.Price_xl.price_lvl_xl[i].addEventListener('click',
    function() {
      btnPricePayXL.name = this.value;
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

        var modalId = this.getAttribute('name'),
            modalElem = document.querySelector('.modal[name="' + modalId + '"]');


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
