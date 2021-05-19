document.addEventListener("DOMContentLoaded", () => {

var pole = document.querySelector(".pole");
var width = 10;
var points = 0;
var start = false;
var bombNumber = 20;
var flags = 0;
var kvs = [];
var seconds = 0;
var gameOver = false;
var youWon = false;
var Place1 = 99999;
var Place2 = 99999;
var Place3 = 99999;

var yw = document.getElementById("youwon");
var go = document.getElementById("youlost");
yw.style.marginLeft="0px";
yw.style.marginLeft="0px";
go.style.display="none";
yw.style.display="none";

//Перевірка мови
function Lang() {

	if (sessionStorage.getItem("Mova")==1) {
		document.getElementById("english").checked = true;
		document.getElementById("russian").checked = false;
		document.getElementById("ukrainian").checked = false;
	};
	if (sessionStorage.getItem("Mova")==2) {
		document.getElementById("english").checked = false;
		document.getElementById("russian").checked = true;
		document.getElementById("ukrainian").checked = false;
	};
	if (sessionStorage.getItem("Mova")==3) {
		document.getElementById("english").checked = false;
		document.getElementById("russian").checked = false;
		document.getElementById("ukrainian").checked = true;
	};


var e = document.getElementById("english").checked;
var r = document.getElementById("russian").checked;
var u = document.getElementById("ukrainian").checked;

	if (e==true) {
		sessionStorage.setItem("Mova", 1);

		document.getElementById("tut0").innerHTML = " Tutorial ";
		document.getElementById("tut1").innerHTML = " Click on the Tiles to reveal them. ";
		document.getElementById("tut2").innerHTML = " The number on the Tile means how many bombs there are around it (+diagonally). ";
		document.getElementById("tut3").innerHTML = " To win, you have to mark ALL Bombs with Flags (right click). ";
		document.getElementById("tut4").innerHTML = " You can Restart any time with Smile Button. ";
		document.getElementById("tut5").innerHTML = " You can see the number of Bombs remained in the left corner and your time in the right one. ";

		document.getElementById("dop").innerHTML = " *Your Records are saved until you completely close the browser. ";

		document.getElementById("rekords").innerHTML = " Records (in seconds): ";

		document.getElementById("chn").innerHTML = " Change language ";
		document.getElementById("reset").innerHTML = " RESET RECORDS ";

		document.getElementById("also").innerHTML = " Also visit this sites! ";
	};
	if (r==true) {
		sessionStorage.setItem("Mova", 2);

		document.getElementById("tut0").innerHTML = " Обучение ";
		document.getElementById("tut1").innerHTML = " Нажимайте на Квадратики, чтобы открыть их. ";
		document.getElementById("tut2").innerHTML = " Цифра на Квадратике означает сколько бомб вокруг (+диагонально). ";
		document.getElementById("tut3").innerHTML = " Чтобы выиграть, нужно пометить ВСЕ бомбы Флажками (правый клик). ";
		document.getElementById("tut4").innerHTML = " Вы можете перезапустить игру в любое время с помощью Кнопки-Смайлика. ";
		document.getElementById("tut5").innerHTML = " В левом углу находится кол-во оставшихся Бомб, а в правом - время. ";

		document.getElementById("dop").innerHTML = " *Ваши Рекорды будут сохраняться пока вы не закроете браузер. ";

		document.getElementById("rekords").innerHTML = " Рекорды (в секундах): ";

		document.getElementById("chn").innerHTML = " Поменять язык ";
		document.getElementById("reset").innerHTML = " СТЕРЕТЬ РЕКОРДЫ ";

		document.getElementById("also").innerHTML = " Также посетите эти сайты! ";
	};
	if (u==true) {
		sessionStorage.setItem("Mova", 3);

		document.getElementById("tut0").innerHTML = " Як грати ";
		document.getElementById("tut1").innerHTML = " Натискайте на Квадратики, щоб відкрити їх. ";
		document.getElementById("tut2").innerHTML = " Цифра на Квадратику означає скільки бомб навкруги (+діагонально). ";
		document.getElementById("tut3").innerHTML = " Щоб виграти, треба позначити ВСІ бомби Прапорцями (правий клік). ";
		document.getElementById("tut4").innerHTML = " Ви можете перезапустити гру в будь-який час за допомогою Кнопки-Смайлика. ";
		document.getElementById("tut5").innerHTML = " У лівому кутку знаходиться кіл-ть Бомб, що залишилися, а в правому - час. ";

		document.getElementById("dop").innerHTML = " *Ваші Рекорди будуть зберігатися поки ви не закриєте браузер. ";

		document.getElementById("rekords").innerHTML = " Рекорди (у секундах): ";

		document.getElementById("chn").innerHTML = " Змінити мову ";
		document.getElementById("reset").innerHTML = " ВИДАЛИТИ РЕКОРДИ ";
	
		document.getElementById("also").innerHTML = " Також відвідайте ці сайти! ";
	};

};

//Зміна мови
document.getElementById("chn").onclick = function() {
var e = document.getElementById("english").checked;
var r = document.getElementById("russian").checked;
var u = document.getElementById("ukrainian").checked;

	if (e==true) {
		sessionStorage.setItem("Mova", 1);

		document.getElementById("tut0").innerHTML = " Tutorial ";
		document.getElementById("tut1").innerHTML = " Click on the Tiles to reveal them. ";
		document.getElementById("tut2").innerHTML = " The number on the Tile means how many bombs there are around it (+diagonally). ";
		document.getElementById("tut3").innerHTML = " To win, you have to mark ALL Bombs with Flags (right click). ";
		document.getElementById("tut4").innerHTML = " You can Restart any time with Smile Button. ";
		document.getElementById("tut5").innerHTML = " You can see the number of Bombs remained in the left corner and your time in the right one. ";

		document.getElementById("dop").innerHTML = " *Your Records are saved until you completely close the browser. ";

		document.getElementById("rekords").innerHTML = " Records (in seconds): ";

		document.getElementById("chn").innerHTML = " Change language ";
		document.getElementById("reset").innerHTML = " RESET RECORDS ";

		document.getElementById("also").innerHTML = " Also visit this sites! ";
	};
	if (r==true) {
		sessionStorage.setItem("Mova", 2);

		document.getElementById("tut0").innerHTML = " Обучение ";
		document.getElementById("tut1").innerHTML = " Нажимайте на Квадратики, чтобы открыть их. ";
		document.getElementById("tut2").innerHTML = " Цифра на Квадратике означает сколько бомб вокруг (+диагонально). ";
		document.getElementById("tut3").innerHTML = " Чтобы выиграть, нужно пометить ВСЕ бомбы Флажками (правый клик). ";
		document.getElementById("tut4").innerHTML = " Вы можете перезапустить игру в любое время с помощью Кнопки-Смайлика. ";
		document.getElementById("tut5").innerHTML = " В левом углу находится кол-во оставшихся Бомб, а в правом - время. ";

		document.getElementById("dop").innerHTML = " *Ваши Рекорды будут сохраняться пока вы не закроете браузер. ";

		document.getElementById("rekords").innerHTML = " Рекорды (в секундах): ";

		document.getElementById("chn").innerHTML = " Поменять язык ";
		document.getElementById("reset").innerHTML = " СТЕРЕТЬ РЕКОРДЫ ";

		document.getElementById("also").innerHTML = " Также посетите эти сайты! ";
	};
	if (u==true) {
		sessionStorage.setItem("Mova", 3);

		document.getElementById("tut0").innerHTML = " Як грати ";
		document.getElementById("tut1").innerHTML = " Натискайте на Квадратики, щоб відкрити їх. ";
		document.getElementById("tut2").innerHTML = " Цифра на Квадратику означає скільки бомб навкруги (+діагонально). ";
		document.getElementById("tut3").innerHTML = " Щоб виграти, треба позначити ВСІ бомби Прапорцями (правий клик). ";
		document.getElementById("tut4").innerHTML = " Ви можете перезапустити гру в будь-який час за допомогою Кнопки-Смайлика. ";
		document.getElementById("tut5").innerHTML = " У лівому кутку знаходиться кіл-ть Бомб, що залишилися, а в правому - час. ";

		document.getElementById("dop").innerHTML = " *Ваші Рекорди будуть зберігатися поки ви не закриєте браузер. ";

		document.getElementById("rekords").innerHTML = " Рекорди (у секундах): ";

		document.getElementById("chn").innerHTML = " Змінити мову ";
		document.getElementById("reset").innerHTML = " ВИДАЛИТИ РЕКОРДИ ";

		document.getElementById("also").innerHTML = " Також відвідайте ці сайти! ";
	};
};

checkRecords();
Lang();


// Таймер + число флажків
function bombsLeft() {
	var int1 = setInterval ( function() {
	checkRecords();
	var bombsleft = document.getElementById("nb");
	bombsleft.classList.add("num"+(bombNumber-flags)); 
	bombsleft.classList.remove("num"+((bombNumber-flags)-1));
	bombsleft.classList.remove("num"+((bombNumber-flags)+1));}, 0);
	
	if (gameOver) {clearInterval(int1)};

	var int2 = setInterval(function() {
	if (start) {
		var timer = document.getElementById("time");
		seconds++;
		time.innerHTML = " Time: "+seconds;
		if (gameOver) {
			clearInterval(int2);
			time.innerHTML = " Time: "+(seconds-1);
		}; 
	};
	}, 1000);
	
};
bombsLeft();


//Чи в перший раз а сторінці
var isFT;
function Checking() {
if (sessionStorage.getItem("FT")==null || sessionStorage.getItem("FT")=="null") {
	sessionStorage.setItem("FT", 0);
};
isFT = sessionStorage.getItem("FT");
	if (isFT==0 || isFT=="0") {
		Destroy();
		sessionStorage.setItem("Mova", 1);
		isFT++;
		sessionStorage.setItem("FT", isFT);
	};
};
Checking();


// Знищення рекордів
document.getElementById("reset").onclick = function() {
	alert("Records erased!");
	sessionStorage.setItem("Placen1", 99999);
	sessionStorage.setItem("Placen2", 99999);
	sessionStorage.setItem("Placen3", 99999);
};

function Destroy() {
	sessionStorage.setItem("Placen1", 99999);
	sessionStorage.setItem("Placen2", 99999);
	sessionStorage.setItem("Placen3", 99999);
};

// Запис рекордів
function Recording() {

	points = seconds;

	if (youWon) {
	Place1 = sessionStorage.getItem("Placen1");
	Place2 = sessionStorage.getItem("Placen2");
	Place3 = sessionStorage.getItem("Placen3");

	if (points <= Place1) {
		sessionStorage.setItem("Placen3", Place2);
		sessionStorage.setItem("Placen2", Place1);
		sessionStorage.setItem("Placen1", points);
	} else if (points > Place1 && points <= Place2) {
		sessionStorage.setItem("Placen3", Place2);
		sessionStorage.setItem("Placen2", points);
	} else if (points > Place2 && points <= Place3) {
		sessionStorage.setItem("Placen3", points);
	};

	Place1 = sessionStorage.getItem("Placen1");
	Place2 = sessionStorage.getItem("Placen2");
	Place3 = sessionStorage.getItem("Placen3");

	if (Place1 != null && Place1 < 99999) {
		document.getElementById("place1").innerHTML = " #1: "+Place1+" ";
	};
	if (Place2 != null && Place2 < 99999) {
		document.getElementById("place2").innerHTML = " #2: "+Place2+" ";
	};
	if (Place3 != null && Place3 < 99999) {
		document.getElementById("place3").innerHTML = " #3: "+Place3+" ";
	};
	};

};

//Показ рекордів
function checkRecords() {
	Place1 = sessionStorage.getItem("Placen1");
	Place2 = sessionStorage.getItem("Placen2");
	Place3 = sessionStorage.getItem("Placen3");

	if (Place1 != null && Place1 < 99999) {
		document.getElementById("place1").innerHTML = " #1: "+Place1+" ";
	};
	if (Place2 != null && Place2 < 99999) {
		document.getElementById("place2").innerHTML = " #2: "+Place2+" ";
	};
	if (Place3 != null && Place3 < 99999) {
		document.getElementById("place3").innerHTML = " #3: "+Place3+" ";
	};

	if (Place1 == null || Place1 >= 99999) {
		document.getElementById("place1").innerHTML = " #1: - ";
	};
	if (Place2 == null || Place2 >= 99999) {
		document.getElementById("place2").innerHTML = " #2: - ";
	};
	if (Place3 == null || Place3 >= 99999) {
		document.getElementById("place3").innerHTML = " #3: - ";
	};
};


//Створення ігрового поля
function createPole() {
	var bombsArray = Array(bombNumber).fill("bomb");
	var emptyArray = Array(width*width-bombNumber).fill("empty");
	var gameArray = emptyArray.concat(bombsArray);
	var randomArray = gameArray.sort(() => Math.random()-0.5);

	for (var i=0; i<(width*width); i++) {
		var kv = document.createElement("div");
		kv.setAttribute("id", i);
		kv.classList.add(randomArray[i]);
		pole.appendChild(kv);
		kvs.push(kv);

		kvs.forEach(kv => {
		kv.addEventListener("click", function(e) {
			click(kv);
		});
		});

		kvs.forEach(kv => {
		kv.oncontextmenu = function(e) {
			e.preventDefault();
			addFlag(kv);
		};
		});



	};

//Бомби (та циферки)
	for (var i=0; i<kvs.length; i++) {
		var total = 0;
		const leftEdge = (kvs[i].id % 10 === 0);
		const rightEdge = (kvs[i].id % 10 === width - 1); 
		if (kvs[i].classList.contains("empty")) {
			if (i>=0 && !leftEdge && kvs[i-1].classList.contains("bomb")) {total ++}; // Зліва
			if (i>=9 && !rightEdge && kvs[i+1-width].classList.contains("bomb")) {total ++}; // Зправа зверху
			if (i>=10 && kvs[i-width].classList.contains("bomb")) {total ++}; //Зверху
			if (i>=11 && !leftEdge && kvs[i-1-width].classList.contains("bomb")) {total ++}; // Зліва зверху
			if (i<=98 && !rightEdge && kvs[i+1].classList.contains("bomb")) {total ++}; // Зправа
			if (i<=90 && !leftEdge && kvs[i-1+width].classList.contains("bomb")) {total ++}; // Зліва знизу
			if (i<=88 && !rightEdge && kvs[i+1+width].classList.contains("bomb")) {total ++}; //Зправа знизу
			if (i<=89 && kvs[i+width].classList.contains("bomb")) {total ++}; // Знизу
			kvs[i].setAttribute("data", total)
			console.log(kvs[i]);
		};
	};
};
createPole();

//Флажки
function addFlag(kv) {
	if (gameOver) {return};
	if (!kv.classList.contains("clicked") && (flags <= bombNumber)) {
		if (!kv.classList.contains("flaged")) {
			kv.classList.add("flaged");
			flags++;
			checkForWin();
		} else {
			kv.classList.remove("flaged");
			flags--;
		};
	};

	if (!kv.classList.contains("clicked") && (flags >= (bombNumber+1))) {
		if (kv.classList.contains("flaged")) {
			kv.classList.remove("flaged");
			kv.innerHTML = "";
			flags--;
		};
	};

};

//Натискання або Клік
function click(kv) {
	start = true;
	var currentId = kv.id;
	if (gameOver) {return};
	if (kv.classList.contains("clicked") || kv.classList.contains("flaged")) {return};
	if (kv.classList.contains("bomb")) {
		loseGame(kv);
	} else {
	var total = kv.getAttribute("data");
	if (total!=0) {
		kv.classList.add("clicked");
		kv.classList.add("t"+total);
		return;
	};
	checkKv(kv,  currentId);
	};
kv.classList.add("clicked");
};

//Перевірка квадратиків (та відкриття поля)
function checkKv(kv,  currentId) {
	var leftEdge = (currentId%width === 0);
	var rightEdge = (currentId%width === width-1);

	setTimeout(() => {
	if (currentId>=0 && !leftEdge) {
		var newId = kvs[parseInt(currentId)-1].id
		var newKv = document.getElementById(newId);
		click(newKv);
	};
	if (currentId>=9 && !rightEdge) {
		var newId = kvs[parseInt(currentId)+1-width].id;
		var newKv = document.getElementById(newId);
		click(newKv);
	};
	if (currentId>=10) {
		var newId = kvs[parseInt(currentId)-width].id;
		var newKv = document.getElementById(newId);
		click(newKv);
	};
	if (currentId>=11 && !leftEdge) {
		var newId = kvs[parseInt(currentId)-1-width].id;
		var newKv = document.getElementById(newId);
		click(newKv);
	};
	if (currentId<=98 && !rightEdge) {
		var newId = kvs[parseInt(currentId)+1].id;
		var newKv = document.getElementById(newId);
		click(newKv);
	};
	if (currentId<=90 && !leftEdge) {
		var newId = kvs[parseInt(currentId)-1+width].id;
		var newKv = document.getElementById(newId);
		click(newKv);
	};
	if (currentId<=88 && !rightEdge) {
		var newId = kvs[parseInt(currentId)+1+width].id;
		var newKv = document.getElementById(newId);
		click(newKv);
	};
	if (currentId<=89) {
		var newId = kvs[parseInt(currentId)+width].id;
		var newKv = document.getElementById(newId);
		click(newKv);
	};
}, 10)
};

//Кінець гри
function loseGame(kv) {
	go.style.marginLeft="415px";
	go.style.display="block";
	gameOver = true;
	var smile = document.getElementById("smil");
	smile.classList.add("smilesad");

	kvs.forEach(kv => {
	if (kv.classList.contains("bomb")) {kv.classList.add("visible");};
	})
	kv.classList.add("lost");
};

//Чи виграв гравець
function checkForWin() {
	var matches = 0;
	for (var i=0; i<kvs.length; i++) {
		if(kvs[i].classList.contains("flaged") && kvs[i].classList.contains("bomb")) {
			matches++;
		};
		if (matches === bombNumber) {
			gameOver = true;
			youWon = true;
		};
	};
	if (gameOver) {Recording(); yw.style.marginLeft="415px"; yw.style.display="block";};
};
})