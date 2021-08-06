


const headElem = document.getElementById("lvlQestions");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");



class Quiz
{
	constructor(type, questions, results)
	{
		this.type = type;

		this.questions = questions;

		this.results = results;

		this.score = 0;

		this.result = 0;

		this.current = 0;
	}

	Click(index)
	{
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;

		if(value >= 1)
		{
			correct = index;
		}
		else
		{
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

	Next()
	{
		this.current++;

		if(this.current >= this.questions.length)
		{
			this.End();
		}
	}

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

class Answer
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}
}

class Result
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}

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

const results =
[
	new Result("<div> от 0 до 10 баллов – у вас пока нет уровня🤗, но все в ваших руках🙌! <br><br> В тесте всегда есть вопросы, которые мы просто угадываем, за счет чего повышается ваш итоговый уровень. <br><br> Будьте внимательны и прежде, чем выбрать уровень обучения посмотрите его программу <a class='quest-link' href='/telegram-club.html#program-telegram'>здесь</a>. <br><br> Скорее всего вы никогда не учили английский или учили его всего несколько лет в школе. <br><br> Вам желательно начинать с самого начала – уровня <b>Starter</b> (если никогда не учили английский) или можно с <b>Elementary</b> (если учили английский раньше и можете на нем читать). <br><br> Перед выбором уровня при оплате курса обязательно посмотрите его программу. <br><br>Выбирайте уровень, на котором знаете и применяете в речи меньше половины тем </div>    <div class='your-choice'><h3>Вам подойдет </h3><div class='your-choice__wrap'><a href='../telegram-club.html' class='your-choice__link button-link'>Telegram club</a></div></div>", 0),
	new Result("от 11 до 37 баллов - вы находитесь на уровне <b>Elementary</b> <br> <br> В тесте всегда есть вопросы, которые мы просто угадываем, за счет чего повышается ваш итоговый уровень. <br> Будьте внимательны и прежде, чем выбрать уровень обучения посмотрите его программу <a class='quest-link' href='/telegram-club.html#program-telegram'>здесь</a>. <br><br> Наверное, вы учили английский в школе и знаете достаточно много слов, но не умеете говорить, не знаете, как правильно соединять их в предложения, не помните или не понимаете систему времен. <br><br> Для обучения вам оптимально начать с уровня <b>A1 Elementary</b> или <b>A2 Pre-Intermediate</b>. <br><br> Перед выбором уровня при оплате курса обязательно посмотрите его программу. <br><br> Выбирайте уровень, на котором знаете и применяете в речи меньше половины тем <br> <div class='your-choice'><h3>Выбери свой курс</h3><div class='your-choice__wrap'><a href='../telegram-club.html' class='your-choice__link button-link'>Telegram club</a><a href='../anglofan.html' class='your-choice__link button-link'>Anglofan</a></div></div>", 10),
  new Result("от 38 до 64 баллов - вы находитесь на уровне <b>Pre-Intermediate</b> <br><br> В тесте всегда есть вопросы, которые мы просто угадываем, за счет чего повышается ваш итоговый уровень. <br><br> Будьте внимательны и прежде, чем выбрать уровень обучения посмотрите его программу  <a class='quest-link' href='/telegram-club.html#program-telegram'>здесь</a>. <br><br> Самые базовые знания английского языка у вас уже есть, но их мало для свободного общения, необходимо двигаться дальше. <br><br> Для обучения вам подойдет уровень <b>A2 Pre-Intermediate</b> или <b>B1 Intermediate</b>. <br><br> Перед выбором уровня при оплате курса обязательно посмотрите его программу. <br><br>Выбирайте уровень, на котором знаете и применяете в речи меньше половины тем <div class='your-choice'><h3>Выбери свой курс</h3><div class='your-choice__wrap'><a href='../telegram-club.html' class='your-choice__link button-link'>Telegram club</a><a href='../anglofan.html' class='your-choice__link button-link'>Anglofan</a></div></div>", 37),
  new Result("от 65 до 77 баллов – у вас уверенный уровень <b>Pre-Intermediate+ / Intermediate</b> <br><br> В тесте всегда есть вопросы, которые мы просто угадываем, за счет чего повышается ваш итоговый уровень. <br><br> Будьте внимательны и прежде, чем выбрать уровень обучения посмотрите его программу  <a class='quest-link' href='/telegram-club.html#program-telegram'>здесь</a>. <br><br> У вас хорошая база, но для свободного общения этого пока недостаточно. <br><br> Для обучения вам подойдет уровень – <b>B1 Intermediate</b>. Перед выбором уровня при оплате курса обязательно посмотрите его программу. <br><br> Выбирайте уровень, на котором знаете и применяете в речи меньше половины тем <br><br>  <div class='your-choice'><h3>Выбери свой курс</h3><div class='your-choice__wrap'><a href='../telegram-club.html' class='your-choice__link button-link'>Telegram club</a><a href='../anglofan.html' class='your-choice__link button-link'>Anglofan</a></div></div>", 64)
];

const questions =
[
	new Question( ('1.	We  ___ good people. ') ,
	[

		new Answer("are", 1),
		new Answer("be", 0),
		new Answer("is", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),

	new Question("2.__________ two sons. ",
	[
		new Answer("she have", 0),
		new Answer("she is", 0),
		new Answer("she get", 0),
		new Answer("she has got", 1),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),

	new Question("3.Mary _________ like basketball.",
	[
		new Answer("doesn't", 1),
		new Answer("not", 0),
		new Answer("don't", 0),
		new Answer("do not", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),

	new Question("4.They're reading. What __________ doing? ",
	[
		new Answer("they", 0),
		new Answer("are they", 1),
		new Answer("is they", 0),
		new Answer("they are ", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),

	new Question("5.__________ he go for a walk every evening?",
	[
		new Answer("does", 1),
		new Answer("has", 0),
		new Answer("is", 0),
		new Answer("do", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
  	new Question("6. There isn't __________ fruit in the shop.",
	[
		new Answer("some", 0),
		new Answer("any", 1),
		new Answer("the", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),

  	new Question("7. They ________ go to the shop.",
	[
		new Answer("can’t are", 0),
		new Answer("can’t", 1),
		new Answer("is can’t", 0),
		new Answer("can’t is", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),

  	new Question("8. Does she read a book every day? - ____________",
	[
		new Answer("Yes, she read.", 0),
		new Answer("No, she not.", 0),
		new Answer("Yes, she every day.", 0),
		new Answer("No, she doesn’t. ", 1),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),

  	new Question("9. ______ apples are really close!",
	[
		new Answer("This", 0),
		new Answer("These", 1),
		new Answer("That", 0),
		new Answer("Those", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
  new Question("10. Do you like __________ there?",
	[
		new Answer("to working", 0),
		new Answer("working", 1),
		new Answer("worked", 0),
		new Answer("work", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),

  	new Question("11. __________ the letters?",
	[
		new Answer("Where is she reading", 1),
		new Answer("Where does she reading", 0),
		new Answer("Where she is reading", 0),
		new Answer("Where she reads", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),

  	new Question("12.Why __________ yesterday?",
	[
		new Answer("you were late", 0),
		new Answer("you lated", 0),
		new Answer("were you late", 1),
		new Answer("you was late", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
  	new Question("13.Kate and Leo  __________ to visit his parents on Sunday. ",
	[
		new Answer("can", 0),
		new Answer("will", 0),
		new Answer("are going", 1),
		new Answer("must", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),

	new Question("14. Megan is fast, but Jack is __________. ",
	[
		new Answer("fastier", 0),
		new Answer("fasty", 0),
		new Answer("faster", 1),
		new Answer("fastest", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question("15. ___________ a new book last month?",
	[
		new Answer("She wrote", 0),
		new Answer("Did she write", 1),
		new Answer("Did she wrote", 0),
		new Answer("Did she writing", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),

	new Question("16. ____________ around the world?",
	[
		new Answer("Have she ever travel", 0),
		new Answer("Has she ever travelled   ", 2),
		new Answer("Have ever she travelled", 0),
		new Answer("Has ever she travel  ", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question("17. Do you _________ to work?",
	[
		new Answer("must", 0),
		new Answer("have to go", 2),
		new Answer("can", 0),
		new Answer("should", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question("18. ___________ a car yesterday at 5 p.m.?",
	[
		new Answer("Was they drive", 0),
		new Answer("Was they driving", 0),
		new Answer("Were they drive", 0),
		new Answer("Were they driving ", 2),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question("19.  He ___________ to the gym 5 years ago.",
	[
		new Answer("uses to go", 0),
		new Answer("used to go", 2),
		new Answer("did use to go", 0),
		new Answer("use", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question("20. ___________ him for ages.",
	[
		new Answer("She haven’t seen", 0),
		new Answer("She hasn’t seen", 2),
		new Answer("She isn’t seen", 0),
		new Answer("She isn’t seeing", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question("21. Is it ___________  for you?",
	[
		new Answer("good enough", 2),
		new Answer("enough good", 0),
		new Answer("too enough", 0),
		new Answer("enough too", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question("22. - Give me  ____ apple from the table. - Which one?",
	[
		new Answer("a", 0),
		new Answer("an", 2),
		new Answer("the", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question("23. I need ________ furniture for my new apartment.",
	[
		new Answer("a", 0),
		new Answer("some", 2),
		new Answer("an", 0),
		new Answer("the", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question("24. We got here ______________.",
	[
		new Answer("by a train", 0),
		new Answer("with train", 0),
		new Answer("by train", 2),
		new Answer("with a train", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question("25. Who ___________ the truth?",
	[
		new Answer("know", 0),
		new Answer("does know", 0),
		new Answer("knows", 2),
		new Answer("is know", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question("26. Sally  __________ this film. ",
	[
		new Answer("seen already", 0),
		new Answer("already seen", 0),
		new Answer("has already seen", 2),
		new Answer("have already seen", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question("27. I _________ TV when she ________ into the room.",
	[
		new Answer("watched_comes", 0),
		new Answer("watched_came", 0),
		new Answer("was watching_comes", 0),
		new Answer("was watching_came", 2),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question("28. Nick said he ___________ to get a new job.",
	[
		new Answer("wants", 0),
		new Answer("wanted", 2),
		new Answer("is wanting", 0),
		new Answer("wanting", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question("29. English __________ all over the world.",
	[
		new Answer("is speaked", 0),
		new Answer("is spoken", 3),
		new Answer("is spoking", 0),
		new Answer("is spoke", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question("30. He ______ the car if he _________ the lottery.",
	[
		new Answer("would buy_ won", 3),
		new Answer("buy_ win", 0),
		new Answer("buys_ wins", 0),
		new Answer("have buy _ won", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question("31. She _______ with him.",
	[
		new Answer("always arguing", 0),
		new Answer("always is arguing", 0),
		new Answer("always does arguing", 0),
		new Answer("is always arguing", 3),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question("32. I bought this coat for _____ in the forest in winter. ",
	[
		new Answer("walk", 0),
		new Answer("walking", 3),
		new Answer("to walk", 0),
		new Answer("walked", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question("33. By the time they went to the restaurant Jack _______  his supervisor.",
	[
		new Answer("called", 0),
		new Answer("has called", 0),
		new Answer("have called", 0),
		new Answer("had called", 3),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question(('Thai street food is <b>34 ______</b> the best in the world, and for around $5 you can eat 35 ____ filling and delicious meal. Some food stands 36 ____ little plastic seats where you can sit and eat and they cook the same dish over and over, like fried chicken on rice or Pad Thai noodles. '),
	[
		new Answer("between", 0),
		new Answer("among", 3),
		new Answer("with", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question("Thai street food is among the best in the world, and for around $5 you can eat <b>35 ______</b> filling and delicious meal. Some food stands 36 ______ little plastic seats where you can sit and eat and they cook the same dish over and over, like fried chicken on rice or Pad Thai noodles. ",
	[
		new Answer("a", 3),
		new Answer("an", 0),
		new Answer("the", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question("Thai street food is among the best in the world, and for around $5 you can eat a filling and delicious meal. Some food stands <b>36 ______</b> little plastic seats where you can sit and eat and they cook the same dish over and over, like fried chicken on rice or Pad Thai noodles. ",
	[
		new Answer("has", 0),
		new Answer("have", 3),
		new Answer("had", 0),
		new Answer("are having", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question(('<div class="audio">37. AUDIO 1<br><p>Speaker goes there after the office workers have left.</p><audio controls> <source src="https://email.anglofan.ru/Happy-hungry-people_01.mp3" type="audio/mp3"> <source src="https://email.anglofan.ru/Happy-hungry-people_01.ogg"  type="audio/ogg"></audio></div>'),
	[
		new Answer("True", 0),
		new Answer("False", 3),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question(('<div class="audio">38. AUDIO 2<br><p>Speaker says that you can buy both salad and pasta there.</p><audio controls> <source src="https://email.anglofan.ru/Happy-hungry-people_02.mp3" type="audio/mp3"> <source src="https://email.anglofan.ru/Happy-hungry-people_02.ogg"  type="audio/ogg"></audio></div>'),
	[
		new Answer("True", 3),
		new Answer("False", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question(('<div class="audio">39. AUDIO 3<br><p>Speaker eats lunch there.</p><audio controls> <source src="https://email.anglofan.ru/Happy-hungry-people_03.mp3" type="audio/mp3"> <source src="https://email.anglofan.ru/Happy-hungry-people_03.ogg"  type="audio/ogg"></audio></div>'),
	[
		new Answer("True", 0),
		new Answer("False", 3),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	]),
	new Question(('<div class="audio">40. AUDIO 4<br><p>Speaker says this place offers a variation on a traditional food.</p><audio controls> <source src="https://email.anglofan.ru/Happy-hungry-people_04.mp3" type="audio/mp3"> <source src="https://email.anglofan.ru/Happy-hungry-people_04.ogg"  type="audio/ogg"></audio></div>'),
	[
		new Answer("True", 3),
		new Answer("False", 0),
		new Answer("Если не знаешь ответ, но хочешь выбрать наугад, нажми сюда", 0)
	])
];


const quiz = new Quiz(1, questions, results);

Update();

function Update()
{

	if(quiz.current < quiz.questions.length)
	{
		headElem.innerHTML = quiz.questions[quiz.current].text;

		buttonsElem.innerHTML = "";

		for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
		{
			let lvlBtn = document.createElement("your-lvl__btn");
			lvlBtn.className = "your-lvl__btn";

			lvlBtn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			lvlBtn.setAttribute("index", i);

			buttonsElem.appendChild(lvlBtn);
		}

		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

		Init();
	}
	else
	{
		buttonsElem.innerHTML = "";
		headElem.innerHTML = quiz.results[quiz.result].text;
		pagesElem.innerHTML = "Баллы: " + quiz.score;
	}
}

function Init()
{
	let lvlBtns = document.getElementsByClassName("your-lvl__btn");

	for(let i = 0; i < lvlBtns.length; i++)
	{
		lvlBtns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}

function Click(index)
{
	let correct = quiz.Click(index);

	let lvlBtns = document.getElementsByClassName("your-lvl__btn");

	for(let i = 0; i < lvlBtns.length; i++)
	{
		lvlBtns[i].className = "your-lvl__btn your-lvl__btn-passive";
    lvlBtns[i].setAttribute("disabled", "disabled");
	}

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
		lvlBtns[index].className = "your-lvl__btn your-lvl__btn-correct";

	}

	setTimeout(Update, 1000);
}
