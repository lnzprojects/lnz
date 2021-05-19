window.onload = function() {
	// if button "start test" is clicked
	document.getElementById("textstarttest").addEventListener('click', function() {
		document.getElementById("proccess").style.display = "block";
		document.getElementById("starttest").style.display = "none";
	});
	console.log("їжак" > "яблуко");
	var questions = [
		"Чи спрацює виклик функції?", //1
		"Чи є правильним твердження: мова программування Javascript є підвидом Java?", //2
		"Чи є правильним порівняння: 'їжак' > 'яблуко'?", //3
		"Яка кількість повідомлень буде виведена в консоль?", //4 
		"В чому полягає різниця між локальною та глобальною змінною?", //5
		"У якому рядку правильно виведені дані?", //6
		"Яка зі змінних більше: 'Apple' чи 'apple'?", //7 
		"Що виведе alert?", //8
		"В чому полягає різниця між confirm та prompt?", //9 
		"Що таке умовний оператор?", //10
		"Які значення можна зберігати у змінних?", //11
		"У якому рядку правильно вказане ім'я змінної?" //12
	];
	var options = [
		["Так, спрацює", "Ні, не спрацює", "Залежить від браузера","Немає правильної відповіді"], //1
		["Так", "Ні", "Java - підвид Javascript","Немає правильної відповіді"], //2
		["Так","Ні","Не можна порівнювати","Залежить від браузера"], //3
		["6","15","5","25"], //4
		["Немає різниці","Глобальні можна перевизначити, а локальну - ні", "Глобальні видно всюди, а локальні - тільки в функціях", "Локальні видно всюди, а глобальні - тільки в функціях"], //5
		["documentWrite('Hello');","print(Hello);","alart('Hello');","console.log('Hello');"], //6
		["Однакові","Apple більше","apple більше","З великої літери не можна називати змінні"], //7
		["undefined","null","Hello","Буде помилка"], //8
		["Немає різниці","prompt викликає вікно з полем введення, а confirm - вікно з підтвердженням","confirm викликає вікно з полем введення, а prompt - вікно з підтвердженням","Немає правильної відповіді"],
		["Конструкція, яка виконує код декілька разів","Оператор порівняння значень","Конструкція створення змінної","Оператор присвоювання значень"],
		["Числа та рядки","Тільки цілі та прості числа, рядки","Рядки, числа, булеві вирази","Немає правильної відповіді"],
		["var 2num;","ver num;","var num-1;","var num_1;"]
	]
	var answers = [
		"1", "2", "1", "3", "3", "4", "3", "1", "2", "2", "3", "4"
	];
	var code = [
		'<div class="code"><pre class="code-example"><code><span><span class="blue">testFunc</span>();<br><br><span class="purple">function</span> testFunc() {<br><span class="blue">  alert</span>(<span class="yellow">"hello"</span>);<br>}</span></code></pre></div>', //need 1
		"",
		"",
		'<div class="code"><pre class="code-example"><code><span><span class="pink">for</span> (<span class="purple">var</span> <span class="blue">i</span><span class="pink"> = </span><span class="green">10</span>; <span class="blue">i</span><span class="pink"> &#60; </span><span class="green">35</span>; <span class="blue">i</span><span class="pink">+</span><span class="pink">=</span><span class="green">5</span>) {<br><span class="orange">  console</span>.<span class="purple">log</span>(<span class="blue">i</span>);<br>}</span></code></pre></div>', //need 4
		"",
		"",
		"",
		'<div class="code"><pre class="code-example"><code><span><span class="blue">alert</span>(<span class="blue">text</span>);<br><span class="purple">var</span><span class="blue"> text</span><span class="pink"> = </span><span class="yellow">"hello"</span>;</span></code></pre></div>', //need 8
		"",
		"",
		"",
		""
	];
	
	var youranswer = 0;
	var result = [];
	var question = 0;
	var k = 0;

	// call the function to go to the next question
	gotoquestion();

	// if button "next question" is clicked
	document.getElementById("next").addEventListener("click", function() {
		youranswer = 0;
		for (var i = 0; i < 4; i++) {
			if (document.getElementsByClassName("answer")[i].checked) {
				youranswer = document.getElementsByClassName("answer")[i].value;
				break;
			}
		}
		if (youranswer != 0) {
			result[question] = (answers[question] == youranswer);
			question++;
			if (question != parseInt(questions.length)) {
				gotoquestion();
			} else {
				showresult();
			}
		}
	});

	// change styles for button "next question"
	document.addEventListener("click", function(event) {
		if (event.target.className == "answer") {
			document.getElementById("next").style.opacity = "1";
			document.getElementById("next").style.cursor = "pointer";
			document.getElementById("next").style.backgroundColor = "rgb(237, 179, 108)";
		}
	});

	// load next question
	function gotoquestion() {
		nextbutton();
		if (question == 0) {
			document.getElementById("status").style.width = "0";
		} else if (question == parseInt(questions.length)-1) {
			document.getElementById("status").style.width = "99%";
			document.getElementById("textstatus").innerHTML = "99%";
			document.getElementById("next").innerHTML = "Завершити тест";
		} else {
			document.getElementById("status").style.width = Math.floor(100*question/(parseInt(questions.length)-1)) + "%";
			document.getElementById("textstatus").innerHTML = Math.floor(100*question/(parseInt(questions.length)-1)) + "%";
		}
		document.getElementById("question").innerHTML = questions[question];
		for (var i = 0; i < 4; i++) {
			document.getElementsByClassName("spananswer")[i].innerHTML = " " + options[question][i];
		}
		document.getElementById("quescode").innerHTML = code[question];
		for (var i = 0; i < 4; i++) {
			document.getElementsByClassName("answer")[i].checked = false;
		}
	}

	// show test result
	function showresult() {
		document.getElementById("proccess").style.display = "none";
		document.getElementById("resulttest").style.display = "block";
		for (var i = 0; i < result.length; i++) {
			if (result[i]) {
				k++;
			}
		}
		document.getElementById("textres").innerHTML = document.getElementById("textres").innerHTML + k + "/" + parseInt(questions.length) + " (" + Math.floor(100*k/parseInt(questions.length)) + "%)";
		document.getElementById("status").style.width = "100%";
		document.getElementById("textstatus").innerHTML = "100%";
	}

	// styles for button "next question"
	function nextbutton() {
		document.getElementById("next").style.cursor = "auto";
		document.getElementById("next").style.opacity = "0.7";
		document.getElementById("next").style.backgroundColor = "rgba(237, 179, 108,0.75)";
	}

}
