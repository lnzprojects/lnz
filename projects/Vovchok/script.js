const world = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game");
const startBtn = document.getElementById("startBtn");
const game = document.getElementById("game");
const difficultySelect = document.getElementById('difficulty');
const settingsForm = document.getElementById('settings-form');

const words = [
 "цуценя",
  "вишня",
  "горіх",
  "лелека",
  "дарунок",
  "святі",
  "свята",
  "ласунок",
  "папуга",
  "пірат",
  "веселка",
   "пігулка",
 "парк",
 "рахунок",
 "автобус",
 "спорт",
 "яскравий",
 "скарб",
 "подорож",
 "команда",
 "стадіон",
 "папір",
 "міцний",
 "готувати",
 "обіцяти",
 "рахунок",
 "ромашка"
];
let randomWord;
let score = 0;
let time = 10;

let timeInterval = 0;


startBtn.addEventListener('click', startGame);


let difficulty = 
sessionStorage.getItem('difficulty') !== null 
? sessionStorage.getItem('difficulty')
: 'medium';

difficultySelect.value = 
sessionStorage.getItem('difficulty') !== null 
? sessionStorage.getItem('difficulty')
: 'medium';


function startGame() {
  game.style.display = 'block';
  startBtn.style.display = 'none';
  text.focus();
  timeInterval = setInterval(updateTime, 1000);
  addWordToDOM();

}
function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endgameEl.innerHTML = `
    <h1>Час закінчився</h1>
    <p>Ваш рахунок ${score}</p>
    <button onclick="location.reload()">Оновити</button>
  `;
  text.disabled = true;
}

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM() {
  randomWord = getRandomWord();
  world.innerHTML = randomWord;
}
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}


text.addEventListener("input", e => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();
    e.target.value = "";
    switch (difficulty) {
      case 'hard': time+=2;
      break;
      case 'middle': time+=4;
      break;
      case 'easy': time+=6;
      break;
    }
    
    updateTime();
  }
});

settingsForm.addEventListener('change', (e)=>{
  console.log(e.target.value);
  difficulty = e.target.value;
  sessionStorage.setItem('difficulty', difficulty);
  text.focus();
})