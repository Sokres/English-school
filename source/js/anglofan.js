
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
