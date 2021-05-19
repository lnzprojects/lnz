var answers = [
    [["var road = 20;", "var road=20;", "var road= 20;", "var road =20;", "Var road = 20;", "Var road =20;", "Var road= 20;", "Var road=20;"], ["3"], [""], ["5"], ["4"]],                  // lesson1 answer1 (all options) answer 2 (all options)
    [["50"], ["хибою"], ["істиною"], ["1000108"]],                                                            // lesson2
    [["3"]],
    [],
    [["101"]]
];

function checkAnswer(lesson, a, i, radioTask) {

    var element = document.getElementsByClassName("answerInput")[a-1],
        res = false,
        correctAnswer = "",
        radio = false,
        checkedInput = false;
    if (element.type == "radio") {
        radio = true;
        var element = document.getElementsByName(radioTask);
    }
    for (var j = 0; j < answers[lesson-1][i-1].length; j++) {
        if (radio) {
            for (var k = 0; k < element.length; k++) {
            if (element[k].value == answers[lesson-1][i-1][j] && element[k].checked == true) {
                res = true;
            }
        }
        } else {
            if (element.value == answers[lesson-1][i-1][j]) {
                res = true;
            }
        }
    }
    if (res) {
        alert("Правильно!");
    } else {
        correctAnswer += " ' " + answers[lesson-1][i-1][0] + " '";
        if (radio) {
            for (var h = 0; h < element.length; h++) {
                if (element[h].checked == true) {
                    checkedInput = true;
                }
            }
        } else {
            if (element.value.length > 0) {
                checkedInput = true;
            }
        }
        if (checkedInput) {
            // alert("Неправильно! Правильна відповідь - " + correctAnswer);
            alert("Неправильно!");
        } else {
            alert("Ви ще не відповіли!");
        }
    }
    if (element.type != "radio") {
        element.value = "";
    } else {
        for (var h = 0; h < element.length; h++) {
            element[h].checked = false;
        }
    }
}

function showAnswer(num) {
    let button = document.getElementsByClassName("code-answer-button")[num],
        answer = document.getElementsByClassName("code-answer")[num];
    if (button.innerHTML == "Показати відповідь") {
        answer.style.display = "block";
        button.innerHTML = "Сховати відповідь";
    } else {
        answer.style.display = "none";
        button.innerHTML = "Показати відповідь";
    }
   
}