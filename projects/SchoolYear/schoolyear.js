var model = {

    score: 0,
    scorePerSubject: [],
    timer: 0,
    maxTimer: 800,

    tiktokTimer: function () {
        this.timer += 1;
        if (this.timer > this.maxTimer) {
            this.timer = this.maxTimer
        }
        view.animateTimer();
        return (this.timer != this.maxTimer);
    },

    figures: {
        figuresInRow: 5,
        figuresInColumn: 8,
        figuresCount: 5,		                                            // 9 - Max, view.subjects[]

        width: 71,
        height: 71,
        spacing: 10,

        matrix: [],

        selectedFigure: {
            isSelected: false,
            row: -1,
            col: -1,

            trySelect: function (row, col) {
                view.playSound("click");

                if (this.isSelected) {
                    view.displaySelected(this.row, this.col, false);
                    if (this.row == row && this.col == col) {               // same cell - deselect it
                        this.isSelected = false;
                    } else if ((this.row != row && this.col != col) ||      // diagonal or far from the first cell
                        (Math.abs(this.row - row) > 1) ||
                        (Math.abs(this.col - col) > 1)) {
                        this.row = row;
                        this.col = col;
                        this.isSelected = true;
                    } else {                                                // try to swap
                        this.isSelected = false;
                        model.figures.swapFigures(this.row, this.col, row, col);
                    }
                } else {                                                    // this.isSelected == false
                    this.row = row;
                    this.col = col;
                    this.isSelected = true;
                }
                view.displaySelected(this.row, this.col, this.isSelected);
            }
        },

        generateFigureLocations: function () {
            for (var r = 0; r < this.figuresInRow; r++) {
                this.matrix[r] = [];
                for (var c = 0; c < this.figuresInColumn; c++) {
                    this.matrix[r][c] = { figureId: 0, matchUp: false };
                    this.matrix[r][c].figureId = randomInt(this.figuresCount);
                }
            }
        },

        have3inLine: function () {
            var isWin = false;
            // resetMatchUp
            for (var r = 0; r < this.figuresInRow; r++) {
                for (var c = 0; c < this.figuresInColumn; c++) {
                    this.matrix[r][c].matchUp = false;
                }
            }
            // horizontal
            for (var r = 0; r < this.figuresInRow; r++) {
                for (var c = 0; c < this.figuresInColumn - 2; c++) {
                    if ((this.matrix[r][c].figureId == this.matrix[r][c + 1].figureId) &&
                        (this.matrix[r][c + 1].figureId == this.matrix[r][c + 2].figureId)
                    ) {
                        isWin = true;
                        this.matrix[r][c].matchUp = true;
                        this.matrix[r][c + 1].matchUp = true;
                        this.matrix[r][c + 2].matchUp = true;
                    }
                }
            }
            // vertical
            for (var r = 0; r < this.figuresInRow - 2; r++) {
                for (var c = 0; c < this.figuresInColumn; c++) {
                    if ((this.matrix[r][c].figureId == this.matrix[r + 1][c].figureId) &&
                        (this.matrix[r + 1][c].figureId == this.matrix[r + 2][c].figureId)
                    ) {
                        isWin = true;
                        this.matrix[r][c].matchUp = true;
                        this.matrix[r + 1][c].matchUp = true;
                        this.matrix[r + 2][c].matchUp = true;
                    }
                }
            }
            return isWin;
        },

        swapFigures: function (row1, col1, row2, col2) {
            var figureId1 = this.matrix[row1][col1].figureId;
            var figureId2 = this.matrix[row2][col2].figureId;
            if (figureId1 != figureId2) {
                this.matrix[row1][col1].figureId = figureId2;
                this.matrix[row2][col2].figureId = figureId1;
                if (!this.have3inLine()) {                           // no 3 in line - swap back
                    this.matrix[row1][col1].figureId = figureId1;
                    this.matrix[row2][col2].figureId = figureId2;
                    view.playSound("swapFail");
                    view.animateSwapFigure(row1, col1, row2, col2, false);
                } else {
                    view.playSound("swapDone");
                    view.animateSwapFigure(row1, col1, row2, col2, true);
                }
            } else {
                view.playSound("swapFail");
                view.animateSwapFigure(row1, col1, row2, col2, false);
            }
        },

        collapseFigeres: function () {
            this.calculateScore();
            for (var c = 0; c < this.figuresInColumn; c++) {
                for (var r = this.figuresInRow - 1; r >= 0; r--) {
                    while (this.matrix[r][c].matchUp) {
                        for (var j = r; j > 0; j--) {
                            this.matrix[j][c].figureId = this.matrix[j - 1][c].figureId;
                            this.matrix[j][c].matchUp = this.matrix[j - 1][c].matchUp;
                        }
                        this.matrix[0][c].figureId = randomInt(this.figuresCount);
                        this.matrix[0][c].matchUp = false;
                    }
                }
            }
        },

        calculateScore: function () {
            var counter = 0;
            var multiplier = 1;

            for (var r = 0; r < this.figuresInRow; r++) {
                for (var c = 0; c < this.figuresInColumn; c++) {
                    if (this.matrix[r][c].matchUp) {
                        counter += 1;
                        model.scorePerSubject[this.matrix[r][c].figureId] += 1;
                    }
                }
            }

            if (counter > 6) multiplier = 3;
            else if (counter > 3) multiplier = 2;
            model.score += counter * multiplier;
        },

        init: function () {
            do {
                this.generateFigureLocations();
            }
            while (this.have3inLine() == true);
        }
    },

    selectFigure: function (row, col) {
        this.figures.selectedFigure.trySelect(row, col);
    },

    board: {
        boardWith: 1024,
        boardHeight: 768,

        init: function () {
            // get screen size
            var board = document.getElementById("board");
            this.boardWith = board.scrollWidth;
            this.boardHeight = board.scrollHeight;
        }

    },

    gameOver: function () {
        view.displayGameOver();
    },

    init: function () {
        this.board.init();
        this.figures.init();
        this.score = 0;
        for (var i = 0; i < this.figures.figuresCount; i++) {
            this.scorePerSubject[i] = 0;
        }
        this.timer = 0;
    }

};


var view = {

    imagesUrl: "Images/",
    subjects: ["Biology", "Chemistry", "Geography", "IT", "Math", "Music", "PE", "Physics", "Writing"],

    soundOn: true,
    soundClick: new Audio("Sounds/pop.wav"),
    soundSwapFail: new Audio("Sounds/swoop-007.wav"),
    soundSwapDone: new Audio("Sounds/item-pick-up.wav"),
    soundBell: new Audio("Sounds/school-bell.wav"),
    soundCollapse: new Audio("Sounds/video-game.wav"),

    InitHtmlBoard: function () {
        document.getElementById("gameOverArea").style.display = "none";
        document.getElementById("gameArea").style.display = "block";

        var table = document.getElementById("boardTable")
        var rowCount = table.rows.length;
        for (var r = 0; r < rowCount; r++) {
            table.deleteRow(0);
        }

        for (var r = 0; r < model.figures.figuresInRow; r++) {
            var row = document.createElement('tr');

            for (var c = 0; c < model.figures.figuresInColumn; c++) {
                var cell = document.createElement('td');
                var img = document.createElement('img');
                img.src = this.imagesUrl + this.subjects[model.figures.matrix[r][c].figureId] + ".png";
                img.id = "img_" + r + "_" + c;
                img.setAttribute("class", "regular");
                cell.appendChild(img);
                cell.id = "cell_" + r + "_" + c;
                row.appendChild(cell);
            }

            table.appendChild(row);
        }
    },

    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },

    animateSwapFigure: function (row1, col1, row2, col2, swapImage) {
        var img1 = document.getElementById("img_" + row1 + "_" + col1);
        var img2 = document.getElementById("img_" + row2 + "_" + col2);
        img1.setAttribute("class", "swap");
        img2.setAttribute("class", "swap");

        setTimeout(function () {
            img1.setAttribute("class", "regular");
            img2.setAttribute("class", "regular");
            if (swapImage) {
                var imgsrc = img1.src;
                img1.src = img2.src;
                img2.src = imgsrc;
                controller.startCollapse();
            }
        }, 500);
    },

    animateCollapseFigure: function () {
        view.playSound("collapse");
        for (var r = 0; r < model.figures.figuresInRow; r++) {
            for (var c = 0; c < model.figures.figuresInColumn; c++) {
                if (model.figures.matrix[r][c].matchUp) {
                    document.getElementById("img_" + r + "_" + c).setAttribute("class", "collapse");
                }
            }
        }
    },

    animateTimer: function () {
        var prc = model.timer * 100.0 / model.maxTimer;
        document.getElementById("myTimer").style.width = prc + "%";
    },

    displaySelected: function (row, col, isSelected) {
        var cell = document.getElementById("cell_" + row + "_" + col);
        if (isSelected) {
            cell.setAttribute("class", "selected");
        } else {
            cell.setAttribute("class", "regular");
        }
    },

    displayBoard: function () {
        for (var r = 0; r < model.figures.figuresInRow; r++) {
            for (var c = 0; c < model.figures.figuresInColumn; c++) {
                var img = document.getElementById("img_" + r + "_" + c);
                img.src = this.imagesUrl + this.subjects[model.figures.matrix[r][c].figureId] + ".png";
                img.setAttribute("class", "regular");
            }
        }
    },

    playSound: function (sound) {
        if (this.soundOn) {
            if (sound == "click") {
                this.soundClick.currentTime = 0;
                this.soundClick.play();
            } else if (sound == "swapFail") {
                this.soundSwapFail.currentTime = 0;
                this.soundSwapFail.play();
            } else if (sound == "swapDone") {
                this.soundSwapDone.currentTime = 0;
                this.soundSwapDone.play();
            } else if (sound == "bell") {
                this.soundBell.currentTime = 0;
                this.soundBell.play();
            } else if (sound == "collapse") {
                this.soundCollapse.currentTime = 0;
                this.soundCollapse.play();
            }
        }
    },

    refresh: function () {
        this.displayBoard();
        this.displayMessage("Score: " + model.score);
    },

    displayGameOver: function () {
        view.playSound("bell");
        document.getElementById("gameOverArea").style.display = "block";
        document.getElementById("gameArea").style.display = "none";

        var table = document.getElementById("gameOverTable")
        var rowCount = table.rows.length;
        for (var r = 0; r < rowCount; r++) {
            table.deleteRow(0);
        }

        for (var r = 0; r < model.figures.figuresCount; r++) {
            var row = document.createElement('tr');

            var cell = document.createElement('td');
            var img = document.createElement('img');
            img.src = this.imagesUrl + this.subjects[r] + ".png";
            img.setAttribute("class", "regular");
            cell.appendChild(img);
            row.appendChild(cell);

            cell = document.createElement('td');
            var text = document.createTextNode(this.subjects[r]);
            cell.appendChild(text);
            row.appendChild(cell);

            cell = document.createElement('td');
            text = document.createTextNode(model.scorePerSubject[r] > 12 ? 12 : model.scorePerSubject[r]);
            cell.appendChild(text);
            row.appendChild(cell);

            table.appendChild(row);
        }
    },

    init: function () {
        shuffle(this.subjects);
        this.InitHtmlBoard();
        this.displayBoard();
        this.displayMessage("Let's start the school year!");
        this.animateTimer();
    }

};

var controller = {

    timerId: null,

    timerEvent: function () {
        if (model.tiktokTimer() == false) {
            clearInterval(controller.timerId);
            model.gameOver();
        }
    },

    startTimer: function () {
        this.timerId = setInterval(this.timerEvent, 50);
    },

    tdClick: function (eventObj) {
        if (controller.timerId == null) controller.startTimer();

        var rowCol = eventObj.currentTarget.id.split("_");
        model.selectFigure(rowCol[1], rowCol[2]); // row & col
    },

    imgMouseDown: function (eventObj) {
        // disable image drag & drop
        eventObj.stopPropagation();
        eventObj.preventDefault();
    },

    startCollapse: function () {
        setTimeout(function () {
            view.animateCollapseFigure();
            setTimeout(function () {
                model.figures.collapseFigeres();
                view.refresh();
                if (model.figures.have3inLine()) {
                    controller.startCollapse();
                }
            }, 500);
        }, 500);
    },


    init: function () {
        var table = document.getElementById("boardTable");
        var cells = table.getElementsByTagName("td");
        for (var i = 0; i < cells.length; i++) {
            cells[i].onclick = this.tdClick;
            cells[i].childNodes[0].onmousedown = this.imgMouseDown;
        };
        this.timerId = null;
    }

};

function randomInt(n) {	// random 0..(n-1)
    return Math.floor(Math.random() * n);
}

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = randomInt(i + 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function init() {
    model.init();
    view.init();
    controller.init();
}

// init - called when the page has completed loading
window.onload = init;
