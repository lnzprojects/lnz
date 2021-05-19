// space - &nbsp;
var reward = 10,
sreward = 30;

var array = [
		['Хто може ходити сидячи?','шахіст'],
		['Столиця Канади','оттава'],
		['Столиця Стародавнього Єгипту','мемфіс'],
		['Основний компонент при виготовленні пороху','селітра'],
		['Комахоїдний ссавець','хохуля'],
		['Середньовічна зброя','бердиш'],
		['Вогнепальна зброя, поширена в 17-18 століттях','фузея'],
		['Військове звання на флоті','адмірал'],
		['Третя в світі країна за площею','китай'],
		['Одиниця вимірювання','паскаль']
		
		];

window.onload = function() {

	var i, tr, lettersTable, question, n, f, answerLength, answer, clickable, res;

	if (localStorage.getItem('coin') === undefined || localStorage.getItem('coin') === null) {
		localStorage.setItem('coin', 0);
	}
	document.getElementById('text-coin').innerHTML = localStorage.getItem('coin');
	if (localStorage.getItem('ques') === undefined || localStorage.getItem('ques') === null) {
		localStorage.setItem('ques', 1);
	}
	if (localStorage.getItem('scene') == undefined || localStorage.getItem('scene') == null) {
		localStorage.setItem('scene', 0);
	}

	n = parseInt(localStorage.getItem('ques'));

	if (n == 1) {
		document.getElementById("p-front").style.display = "none";
		document.getElementById("startgame").innerHTML = "Розпочати гру";
		document.getElementById("div-front").style.display = "block";
	}

	function newQuestion(n) {
		i = 0;
		tr = document.getElementById("tr-word");
		lettersTable = document.getElementById('letters-table');
		question = document.getElementById("question");
		answerLength = array[n-1][1].length;
		answer = array[n-1][1];
		answer = answer.split('');
		clickable = true;
		res = false;


		loadQuestion(n, i);

	}

	newQuestion(n);
	
	function nextQuestion() {
		n++;
		if (n <= array.length)
		{
			newQuestion(n);	
		}
	}

	function reloadQuestion() {
		if (n <= array.length)
		{
			newQuestion(n);	
		}
	}

	document.getElementById('arrow').addEventListener('click', function() {
		if (!res) {
			f = confirm("Пропустити цей рівень за 20 монет?");
		} 
		if (f) {
			localStorage.coin = (parseInt(localStorage.coin) - 20) + "";
			document.getElementById('text-coin').innerHTML = localStorage.getItem('coin');
			if (n == array.length) {
				//alert("вы прошли все уровни!");
				localStorage.ques = 1;
				n = parseInt(localStorage.getItem('ques'));
				newQuestion(n);
				document.getElementById("startgame").innerHTML = "Пройти гру знову";
				document.getElementById("div-front").style.display = "block";
				document.getElementById("p-front").style.display = "block";
			} else {
				alert('Тепер ви можете перейти на наступний рівень!');
				nextQuestion();
			}
		}
	});

	document.getElementById('try-again').addEventListener('click', function() {
		reloadQuestion();
	})
	
	lettersTable.addEventListener('click', function(event) {
		if (event.target.tagName == 'TD' && clickable) {
			var letter = event.target.innerHTML;

			if (answer.indexOf(letter) != -1) {
				var letterIndex = answer.indexOf(letter);
				while (letterIndex != -1) {
					tr.getElementsByTagName('td')[Math.floor((7-answerLength)/2)+letterIndex].innerHTML = letter; 
					answer[letterIndex] = '';
					letterIndex = answer.indexOf(letter);
				}	


				for (var j = 0; j < answerLength; j++) {
					if (tr.getElementsByTagName('td')[Math.floor((7-answerLength)/2)+j].innerHTML == '&nbsp;') {
						res = false;
						break;
					}
					res = true;
				}
				if (res) {
					if (n % 5 == 0) {
						localStorage.coin = (parseInt(localStorage.coin) + sreward) + "";
					} else {
						localStorage.coin = (parseInt(localStorage.coin) + reward) + "";
					}

					document.getElementById('text-coin').innerHTML = localStorage.getItem('coin');
					clickable = false;

					setTimeout(function() {
						if (n == array.length) {
							//alert("вы прошли все уровни!");
							localStorage.ques = 1;
							n = parseInt(localStorage.getItem('ques'));
							newQuestion(n);
							document.getElementById("startgame").innerHTML = "Пройти гру знову";
							document.getElementById("div-front").style.display = "block";
							document.getElementById("p-front").style.display = "block";
						} else {
							alert('Ви отримали 10 монеток і тепер можете перейти на наступний рівень!');
							nextQuestion();
						}
					}, 200);
				}

			} else {
				if (array[n-1][1].indexOf(letter) == -1) {
					i++;
					document.getElementById('game-image').src = localStorage.getItem('scene') + 'game' + i + '.png';
					if (i == 6) {
						setTimeout(function() {
							alert("Ви програли та втратили 10 монеток, спробуйте ще раз!");
							localStorage.coin = (parseInt(localStorage.coin) - reward) + "";
							document.getElementById('text-coin').innerHTML = localStorage.getItem('coin');
							reloadQuestion();
						},100);
					}
				}
				
			}
			
		}


	})

	function loadQuestion(n, i) {
		tr.innerHTML = '';
		localStorage.ques = n;
		document.getElementById('game-image').src = localStorage.getItem('scene') + 'game' + i + '.png';
		question.innerHTML = array[n-1][0];
		var answerLength = array[n-1][1].length;
		for (var i = 0; i < 7; i++) {
			var td = document.createElement('td');
			td.innerHTML = "&nbsp;";
			td.style.borderBottom = "3.5px solid rgb(185, 185, 180)";
			if (i < Math.floor((7-answerLength)/2) || i >= Math.floor((7-answerLength)/2)+answerLength) {
				td.style.border = 'none';
			}

			tr.appendChild(td);

		}
	}
}

