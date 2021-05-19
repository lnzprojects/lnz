("use strict");
document.querySelector("#youlost").style = "display: none;";
let itisnot = '';
let audio;

function toclick(el) {
    var evObj = document.createEvent('Events');
    evObj.initEvent('click', true, false);
    el.dispatchEvent(evObj);

}

function speak(text) {
    const message = new SpeechSynthesisUtterance();
    message.lang = "uk-UA";
    message.text = text;
    window.speechSynthesis.speak(message);
}

function shuffle(array) {
    var currentIndex = array.length,
        tmp,
        randomIndex;
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        tmp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tmp;
    }

    return array;
}

function strfunfill(n) {
    let string;
    for (let i = 0; i < n; i++)
        string += "#";
}

function zal(question) {
    let str;
    let array = shuffle(question.answer);
    let righta = Math.floor(36 * Math.floor(Math.random() * 6 + 3) / 10);
    let left = 34 - righta;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === question.ranswer) {
            str += question.ranswer + ": " + strfunfill(righta) + "\n";
        } else if (i == 3) {
            str += array[i] + ": " + strfunfill(left) + "\n";
        } else {
            let answ
        }
    }
}

let worldlist = [{
        issue: "Жіноче ім'я із страшних снів Біла Клінтона",
        answer: ["Моніка", "Яга", "Марія", "Хіларі"],
        ranswer: "Моніка",
    },
    {
        issue: "Ким став Альонушкін братик Іванко, випивши водиці з сумнівного джерела?",
        answer: ["Оленем", "Поросям", "Сливкою-буркою", "Козеням"],
        ranswer: "Козеням",
    },
    {
        issue: "Що видають школярам на початку навчального року?",
        answer: ["Стипендію", "Правду в очі", "Атестат", "Підручники"],
        ranswer: "Підручники",
    },
    {
        issue: "Як називається популярний рецепт приготування макаронів із м'ясом?",
        answer: ["По-братськи", "По-флотськи", "По-божому", "По-сільському"],
        ranswer: "По-флотськи",
    },
    {
        issue: "Як звали героя казки Шарля Перро?",
        answer: [
            "Хлопчик-з-щіпку",
            "Хлопчик-невидимка",
            "Хлопчик-з-нігтик",
            "Хлопчик-мізинчик",
        ],
        ranswer: "Хлопчик-мізинчик",
    },
    {
        issue: "Де прожив останні роки Ернест Хемингуэй?",
        answer: ["Іспанія", "Гаїті", "Майамі", "Куба"],
        ranswer: "Куба",
    },
    {
        issue: "Що виводить на екран Windows XP під час запуску?",
        answer: ["Система не працює", "Вітання", "Побажання", "Екран смерті"],
        ranswer: "Вітання",
    },
    {
        issue: "Як називають знавця багатьох мов?",
        answer: ["Поліграф", "Поліглот", "Полімер", "Поліесп"],
        ranswer: "Поліглот",
    },
    {
        issue: "Хто з цих філософів у 1864 році написав музику для віршів А. С. Пушкіна «Заклинання» і «Зимовий вечір»?",
        answer: ["Гегель", "Ніцше", "Юнг", "Шопенгауер"],
        ranswer: "Ніцше",
    },
    {
        issue: "Скільки разів на добу заводять Куранти Спаської башти Кремля?",
        answer: ["Один", "Два", "Три", "Чотири"],
        ranswer: "Два",
    },
    {
        issue: "Хто перший отримав Нобелівську премію з літератури?",
        answer: ["Есеїст", "Поет", "Драматург", "Романіст"],
        ranswer: "Поет",
    },
    {
        issue: "З якої літери починаються слова, опубліковані в 16-му томі останнього видання Великої радянської енциклопедії?",
        answer: ["П", "Про", "Н", "М"],
        ranswer: "М",
    },
    {
        issue: "Хто з перерахованих був пажем у часи Катерини II?",
        answer: ["Н.М. Карамзін", "А. Н. Радищев", "Державін Р.", "Фонвізін Д. І."],
        ranswer: "А. Н. Радищев",
    },
    {
        issue: "Який хімічний елемент названий на честь злого підземного гнома?",
        answer: ["Гафній", "Кобальт", "Берилій", "Телур"],
        ranswer: "Кобальт",
    },
    {
        issue: "В якій з цих столиць союзних республік раніше з'явилося метро?",
        answer: ["Мінськ", "Баку", "Єреван", "Тбілісі"],
        ranswer: "Тбілісі",
    },
    {
        issue: "Скільки морів омивають Балканський півострів?",
        answer: ["6", "3", "4", "5"],
        ranswer: "6",
    },
    {
        issue: "Що таке лобогрейка?",
        answer: ["Жнейка", "Шапка", "Хвороба", "Пічка"],
        ranswer: "Жнейка",
    },
    {
        issue: "Який роман Фенімор Купер написав на спір з дружиною?",
        answer: [
            "'Звіробій'",
            "'Останній з могікан'",
            "'Піонери'",
            "'Обережність'",
        ],
        ranswer: "'Обережність'",
    },
    {
        issue: "Який вид кавалерії призначався для бойових дій як в кінному, так і в пішому строю??",
        answer: ["Гусари", "Драгуни", "Улани", "Кирасиры"],
        ranswer: "Драгуни",
    },
    {
        issue: "Яке ім'я не приймав жоден папа римський?",
        answer: ["Віктор", "Георгій", "Євген", "Валентин"],
        ranswer: "Георгій",
    },
    {
        issue: "В якому німецькому місті народилася майбутня імператриця Росії Катерина ІІ?",
        answer: ["Дармштадт", "Штеттін", "Цербст", "Вісбаден"],
        ranswer: "Штеттін",
    },
    {
        issue: "Що забороняв указ, який в 1726 році підписала Катерина I?",
        answer: [
            "Переливати з пустого в порожнє",
            "Пускати пил в очі",
            "Бити байдики",
            "Точити ляси",
        ],
        ranswer: "Пускати пил в очі",
    },
    {
        issue: "Хто носить темні окуляри?",
        answer: ["Лисі", "Кульгаві", "П'яні", "Сліпі"],
        ranswer: "Сліпі",
    },
];

//let toask = worldlist[Math.floor(Math.random() * worldlist.length)];
if (window.innerWidth > 720) {
    var pname = prompt("Ваше Ім'я", "Гравець 1");
    if (pname == null || pname == "" || pname == 0)
        pname = "Гравець 1";
} else {
    pname = '';
    document.getElementById("schet").style = "display:none;";
}
document.querySelector("#schet").innerHTML = pname + " " + 0;

let qlist = [];

while (qlist.length != 15) {
    let question = worldlist[Math.floor(Math.random() * worldlist.length)];
    if (qlist.indexOf(question) === -1) qlist.push(question);
}

console.log(qlist);

let score = 0,
    qnum = 1;
let scoremas = [
    100,
    200,
    300,
    500,
    1000,
    2000,
    4000,
    8000,
    16000,
    32000,
    64000,
    125000,
    250000,
    500000,
    1000000,
];
let boolean = true;
let isright = false;
/////////////////////////////////////////////////////////////////////////////////
setanswer();

function setanswer() {
        if(qnum === 15){
                audio = new Audio('audio/final.mp3');
                audio.play();
        }

    if (qnum === 16) {
        alert("Вітаю, ваш виграш становить " + score + " гривень, піcля того, як ви закриєте це повідомлення, почнеться нова гра.");
        speak("Ви виграли один мільйон гривень.");
        document.location.reload();
    }

    if (qnum > 1 && qnum != 6 && qnum != 11 && qnum != 16)
        document.getElementById("p" + (qnum - 1)).classList.toggle("curschet");
    document.getElementById("p" + qnum).classList.toggle("curschet");

    //let toask = worldlist[Math.floor(Math.random() * worldlist.length)];
    let toask = qlist[qnum - 1];
    document.querySelector("#qask").innerHTML = toask.issue;
    toask.answer = shuffle(toask.answer);
    let buttons = document.getElementsByClassName("qaswer");



    for (let n = 0; n < buttons.length; n++) {
        buttons[n].parentElement.style.background = "#162a4b";
        buttons[n].parentElement.classList.remove("rightclick");

    }



    var el = document.getElementById("divquestion"),
        elClone = el.cloneNode(true);
    el.parentNode.replaceChild(elClone, el);

    for (let n = 0; n < buttons.length; n++) {
        buttons[n].innerHTML = toask.answer[n];
    }



    /*        for (let j of document.getElementsByClassName("thebutton")){
                      j.onclick = function(){
                      this.style = "backdrop-filter: grayscale(80%);";
                      for (let i of this.children){
                      i.style = "animation-play-state: paused";
              }
      }

            } */

        if (document.getElementById("fifyty"))
                document.getElementById("fifyty").onclick = function() {

        this.style = "backdrop-filter: grayscale(80%);"
        for (let i of this.children) {
            i.style = "animation-play-state: paused";
        }
        let n = 0;
        while (n != 2) {
            let num = Math.floor(Math.random() * 4);
            if (buttons[num].innerHTML == toask.ranswer || buttons[num].innerHTML == itisnot || buttons[num].innerHTML == '░░░░░░░░')
                continue;
            else {
                n++;
                buttons[num].innerHTML = '░░░░░░░░';
            }
        }
        this.onclick = null;
                this.id = null;
    }

if(document.getElementById("hint"))
    document.getElementById("hint").onclick = function() {

        this.style = "backdrop-filter: grayscale(80%);"
        for (let i of this.children) {
            i.style = "animation-play-state: paused";
        }
        let n = 0;
        while (n != 1) {
            let num = Math.floor(Math.random() * 4);
            if (buttons[num].innerHTML == toask.ranswer || buttons[num].innerHTML == '░░░░░░░░')
                continue;
            else {
                n++;
                alert("Це точно не " + buttons[num].innerHTML);
                itisnot = buttons[num].innerHTML;
            }
        }
        this.onclick = null;
              this.id = null;
    }

if(document.getElementById("random"))
    document.getElementById("random").onclick = function() {

        this.style = "backdrop-filter: grayscale(80%);"
        for (let i of this.children) {
            i.style = "animation-play-state: paused";
        }

        let n = 0;
        while (n != 1) {
            let num = Math.floor(Math.random() * 4);
            console.log(num);
            if (buttons[num].innerHTML == itisnot || buttons[num].innerHTML == '░░░░░░░░')
                continue;
            else {
                toclick(buttons[num]);
                n++;
            }
        }

        this.onclick = null;
              this.id = null;
    }

    document.getElementById("takemoney").onclick = function() {

        this.style = "backdrop-filter: grayscale(80%);"
        for (let i of this.children) {
            i.style = "animation-play-state: paused";
        }

        alert("Вітаю, ваш виграш становить " + score + " гривень, піcля того, як ви закриєте це повідомлення, почнеться нова гра.");
        speak("Ви виграли " + score + " гривень");
        document.location.reload();

    }

    for (let n = 0; n < buttons.length; n++) {
        buttons[n].addEventListener("click", function(e) {
            buttons[n].parentElement.style.background = "#fca613";
            setTimeout(function() {
                if (buttons[n].innerHTML === toask.ranswer) {
                    audio = new Audio('audio/correct.mp3');
                    audio.play();
                    buttons[n].parentElement.classList.add("rightclick");
                    buttons[n].parentElement.style.background = "#206d15";
                    setTimeout(function() {
                        score = scoremas[qnum - 1];
                        qnum++;
                        document.getElementById("schet").innerHTML = pname + " " + score;
                        setanswer();
                        return 1;
                        //                                                setInterval(setanswer(), 500);

                    }, 1000);

                } else {
audio = new Audio('audio/wrong.mp3');
                    audio.play();

                    buttons[n].parentElement.classList.add("rightclick");
                    buttons[n].parentElement.style.background = "#d9534f";
                    setTimeout(function() {
                        console.log(buttons[n].innerHTML + " | " + toask.ranswer);
                        var el = document.getElementById("divquestion"),
                            elClone = el.cloneNode(true);
                        el.parentNode.replaceChild(elClone, el);
                        alert("Невірно. Правильна відповідь: " + toask.ranswer);
                        if (qnum >= 6 && qnum <= 10) {
                            alert("Ви виграли 1000 гривень");
                        } else if (qnum >= 11 && qnum <= 15) {
                            alert("Ви виграли 32 000 гривень");
                        } else {
                                alert("Ви програли.");
                        }
                    /*    document.getElementById("takemoney").onclick = function() {
                            alert("Ви вже програли.")
                        };
                        document.getElementById("random").onclick = function() {
                            alert("Ви вже програли.")
                        };
                        document.getElementById("hint").onclick = function() {
                            alert("Ви вже програли.")
                        };
                        document.getElementById("fifyty").onclick = function() {
                            alert("Ви вже програли.")
                        }; */
                        document.querySelector("#youlost").style = "display: flex;";
                        document.getElementById("main").style = "filter: blur(5px);";

                        return false;
                    }, 500);
                }
            }, 500);

        });
    }

}

if (window.innerWidth > 720) {
    window.onload = function() {
        document.getElementById("textdiv").style.top = (window.innerHeight * 1.04 - document.getElementById("textdiv").offsetHeight) / 2 + "px";
        console.log(document.getElementById("textdiv").style.top);

    }

    if (localStorage.getItem('isruled') == "true") {
        document.querySelector("#textdiv").style = "display: none;";
    } else {
        document.getElementById("main").style = "filter: blur(5px);";
    }

    document.getElementById("textdivbutton").onclick = function() {
        document.getElementById("textdiv").style = "display: none;";
        document.getElementById("main").style = "filter: none;";
        localStorage.setItem('isruled', true);
    }





    document.addEventListener('keypress', (event) => {
        const keyName = event.key;
        console.log(keyName);
        if (keyName == "h" || keyName == 'р' || keyName == 'р') {
            document.getElementById("main").style = "filter: blur(5px);";
            document.querySelector("#textdiv").style = "display: block;";
            document.getElementById("textdiv").style = "top:" + (window.innerHeight * 1.04 - document.getElementById("textdiv").offsetHeight) / 2 + "px";
        }
        if (keyName === "Enter") {
            document.getElementById("textdiv").style = "display: none;";
            document.getElementById("main").style = "filter: none;";
            //            localStorage.setItem('isruled', true);

        }
    });




} else {
    window.onload = function() {
        //document.getElementById("main").style = "filter: blur(5px);";
    }
    document.getElementById("textdivbutton").onclick = function() {
        document.getElementById("textdiv").style = "display: none;";
        document.getElementById("main").style = "filter: none;";
    }
}
