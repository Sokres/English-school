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

//Модальное окно для теста определи свой уровень
var modalLvl = document.getElementById("lvlModal");

var openBtnLvl = document.querySelector(".btn-test, .test");

var closeLvl = document.getElementsByClassName("your-lvl__close")[0];

openBtnLvl.onclick = function() {
  modalLvl.style.display = "block";
}
closeLvl.onclick = function() {
  modalLvl.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalLvl) {
    modalLvl.style.display = "none";
  }
}




//Сам тест



const headElem = document.getElementById("lvlQestions");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");


//Класс, который представляет сам тест
class Quiz
{
	constructor(type, questions, results)
	{
		//Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
		this.type = type;

		//Массив с вопросами
		this.questions = questions;

		//Массив с возможными результатами
		this.results = results;

		//Количество набранных очков
		this.score = 0;

		//Номер результата из массива
		this.result = 0;

		//Номер текущего вопроса
		this.current = 0;
	}

	Click(index)
	{
		//Добавляем очки
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;

		//Если было добавлено хотя одно очко, то считаем, что ответ верный
		if(value >= 1)
		{
			correct = index;
		}
		else
		{
			//Иначе ищем, какой ответ может быть правильным
			for(let i = 0; i < this.questions[this.current].answers.length; i++)
			{
				if(this.questions[this.current].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}

		this.Next();

		return correct;
	}

	//Переход к следующему вопросу
	Next()
	{
		this.current++;

		if(this.current >= this.questions.length)
		{
			this.End();
		}
	}

	//Если вопросы кончились, этот метод проверит, какой результат получил пользователь
	End()
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
}

//Класс, представляющий вопрос
class Question
{
	constructor(text, answers)
	{
		this.text = text;
		this.answers = answers;
	}

	Click(index)
	{
		return this.answers[index].value;
	}
}

//Класс, представляющий ответ
class Answer
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}
}

//Класс, представляющий результат
class Result
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}

	//Этот метод проверяет, достаточно ли очков набрал пользователь
	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}

//Массив с результатами
const results =
[
	new Result("Бал 1", 0),
	new Result("Бал 2", 2),
  new Result("Бал 3", 4),
  new Result("Бал 4", 6),
  new Result("Бал 5", 7),
	new Result("Бал 6", 11)
];

//Массив с вопросами
const questions =
[
	new Question("2 + 2 = ",
	[
		new Answer("2", 0),
		new Answer("3", 0),
		new Answer("4", 1),
		new Answer("0", 0)
	]),

	new Question("2 * 2 = ",
	[
		new Answer("2", 0),
		new Answer("3", 0),
		new Answer("4", 1),
		new Answer("0", 0)
	]),

	new Question("2 / 2 = ",
	[
		new Answer("0", 0),
		new Answer("1", 1),
		new Answer("2", 0),
		new Answer("3", 0)
	]),

	new Question("2 - 2 = ",
	[
		new Answer("0", 1),
		new Answer("1", 0),
		new Answer("2", 0),
		new Answer("3", 0)
	]),

	new Question("2 + 2 * 2 = ",
	[
		new Answer("4", 0),
		new Answer("6", 1),
		new Answer("8", 0),
		new Answer("10", 0)
	]),
  	new Question("2 + 2 * 2 = ",
	[
		new Answer("4", 0),
		new Answer("6", 1),
		new Answer("8", 0),
		new Answer("10", 0)
	]),

  	new Question("2 + 2 * 2 = ",
	[
		new Answer("4", 0),
		new Answer("6", 1),
		new Answer("8", 0),
		new Answer("10", 0)
	]),

  	new Question("2 + 2 * 2 = ",
	[
		new Answer("4", 0),
		new Answer("6", 1),
		new Answer("8", 0),
		new Answer("10", 0)
	]),

  	new Question("2 + 2 * 2 = ",
	[
		new Answer("4", 0),
		new Answer("6", 1),
		new Answer("8", 0),
		new Answer("10", 0)
	]),

  	new Question("2 + 2 * 2 = ",
	[
		new Answer("4", 0),
		new Answer("6", 1),
		new Answer("8", 0),
		new Answer("10", 0)
	]),

  	new Question("2 + 2 * 2 = ",
	[
		new Answer("4", 0),
		new Answer("6", 1),
		new Answer("8", 0),
		new Answer("10", 0)
	]),



	new Question("2 + 2 / 2 = ",
	[
		new Answer("1", 0),
		new Answer("2", 0),
		new Answer("3", 1),
		new Answer("4", 0)
	])
];

//Сам тест
const quiz = new Quiz(1, questions, results);

Update();

//Обновление теста
function Update()
{
	//Проверяем, есть ли ещё вопросы
	if(quiz.current < quiz.questions.length)
	{
		//Если есть, меняем вопрос в заголовке
		headElem.innerHTML = quiz.questions[quiz.current].text;

		//Удаляем старые варианты ответов
		buttonsElem.innerHTML = "";

		//Создаём кнопки для новых вариантов ответов
		for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
		{
			let lvlBtn = document.createElement("your-lvl__btn");
			lvlBtn.className = "your-lvl__btn";

			lvlBtn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			lvlBtn.setAttribute("index", i);

			buttonsElem.appendChild(lvlBtn);
		}

		//Выводим номер текущего вопроса
		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

		//Вызываем функцию, которая прикрепит события к новым кнопкам
		Init();
	}
	else
	{
		//Если это конец, то выводим результат
		buttonsElem.innerHTML = "";
		headElem.innerHTML = quiz.results[quiz.result].text;
		pagesElem.innerHTML = "Очки: " + quiz.score;
	}
}

function Init()
{
	//Находим все кнопки
	let lvlBtns = document.getElementsByClassName("your-lvl__btn");

	for(let i = 0; i < lvlBtns.length; i++)
	{
		//Прикрепляем событие для каждой отдельной кнопки
		//При нажатии на кнопку будет вызываться функция Click()
		lvlBtns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}

function Click(index)
{
	//Получаем номер правильного ответа
	let correct = quiz.Click(index);

	//Находим все кнопки
	let lvlBtns = document.getElementsByClassName("your-lvl__btn");

	//Делаем кнопки серыми
	for(let i = 0; i < lvlBtns.length; i++)
	{
		lvlBtns[i].className = "your-lvl__btn your-lvl__btn-passive";
    lvlBtns[i].setAttribute("disabled", "disabled");
	}

	//Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
	if(quiz.type == 1)
	{
		if(correct >= 0)
		{
			lvlBtns[correct].className = "your-lvl__btn your-lvl__btn-correct";

		}

		if(index != correct)
		{
			lvlBtns[index].className = "your-lvl__btn your-lvl__btn-wrong";
		}
	}
	else
	{
		//Иначе просто подсвечиваем зелёным ответ пользователя
		lvlBtns[index].className = "your-lvl__btn your-lvl__btn-correct";

	}

	//Ждём секунду и обновляем тест
	setTimeout(Update, 1000);
}




//Липкое меню//

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
