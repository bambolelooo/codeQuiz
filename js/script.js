const questionText = document.querySelector("#questionText");
const ans1 = document.querySelector("#ans1");
const ans2 = document.querySelector("#ans2");
const ans3 = document.querySelector("#ans3");
const ans4 = document.querySelector("#ans4");
const answerContainer = document.querySelector(".answerContainer");
const quiz = document.querySelector(".quiz");
const timeLeft = document.querySelector("#timeLeft");
const startButton = document.querySelectorAll(".startButton");
const currentScore = document.querySelector(".currentScore");
const score = document.querySelector(".score");
const continueButton = document.querySelector(".continue");
quiz.style.display = "none";
currentScore.style.display = "none";
const finalPage = document.querySelector(".finalPage");
const scoreButtons = document.querySelector(".scoreButtons");
const inputName = document.querySelector("#name");
const viewScoreboard = document.querySelector(".viewScoreboard");
const form = document.querySelector(".form");
const congrats = document.querySelector(".congrats");
const scoreboard = document.querySelector(".scoreboard");
const dependOnTimer = document.querySelector(".dependOnTimer");
const viewHighScores = document.querySelector("#highScores");
const scoreboardWrapper = document.querySelector(".scoreboardWrapper");
const correctWrong = document.querySelector(".correctWrong");

const q1 = {
    q: `This is question 1. The corrct answer is 1`,
    a1: `1`,
    a2: `2`,
    a3: `3`,
    a4: `4`,
    corr: `1`,
};
const q2 = {
    q: `This is question 2. The corrct answer is 2`,
    a1: `1`,
    a2: `2`,
    a3: `3`,
    a4: `4`,
    corr: `2`,
};
const q3 = {
    q: `This is question 3. The corrct answer is 3`,
    a1: `1`,
    a2: `2`,
    a3: `3`,
    a4: `4`,
    corr: `3`,
};
const q4 = {
    q: `This is question 4. The corrct answer is 4`,
    a1: `1`,
    a2: `2`,
    a3: `3`,
    a4: `4`,
    corr: `4`,
};
defaultTime = 25;
const questions = [q1, q2, q3, q4];
clearAll();
startButton[0].style.display = "flex";
let questionCounter = [0, 0]; // [total, right]
startButton[0].addEventListener("click", displayFirstQuestion);
function displayFirstQuestion() {
    clearAll();
    correctWrong.textContent = `Result:`;
    questionCounter = [0, 0];
    time = defaultTime;
    startTimer();
    scoreboard.style.display = "flex";
    questions.sort(() => Math.random() - 0.5); // shuffle the questions
    quiz.style.display = "flex";
    let question = questions[questionCounter[0]];
    questionText.textContent = question.q;
    ans1.textContent = question.a1;
    ans2.textContent = question.a2;
    ans3.textContent = question.a3;
    ans4.textContent = question.a4;
    answerContainer.addEventListener("click", checkAnswerAndGoToNext);
}

function checkAnswerAndGoToNext(event) {
    let ans = event.target;

    // check if clicked on button
    if (ans.matches("button")) {
        // if the answer matches the correct in object
        if (ans.textContent === questions[questionCounter[0]].corr) {
            displayCorrectWrong("Corerct!");
            questionCounter[1]++;
        } else {
            time = time - 5;
            displayCorrectWrong(
                `you chose ${ans.textContent} the corrct was ${
                    questions[questionCounter[0]].corr
                }. -5 sec on timer for that.`
            );
        }
        questionCounter[0]++;
        if (questionCounter[0] === questions.length) {
            questionCounter[0] = 0;
            enterName();
        } else {
            let question = questions[questionCounter[0]];
            questionText.textContent = question.q;
            ans1.textContent = question.a1;
            ans2.textContent = question.a2;
            ans3.textContent = question.a3;
            ans4.textContent = question.a4;
            console.log(`question ${questionCounter[0] + 1} displayed`);
        }
    }
}

let scores = [];
try {
    let extracted = localStorage.getItem("scores");
    scores = JSON.parse(extracted);
} catch {
    scores = [];
}

function enterName() {
    clearInterval(interval);
    clearAll();
    currentScore.style.display = "flex";
    dependOnTimer.textContent = "Congratuations on completing this quiz.";
    if (timeOut) {
        dependOnTimer.textContent = "You're out of time :(";
        timeOut = false;
    }
    continueButton.addEventListener("click", showScore);
}

function showScore() {
    clearAll();
    finalPage.style.display = "flex";
    scores = scores.concat([
        [`${inputName.value}`, (questionCounter[1] / questions.length) * 100],
    ]);
    localStorage.setItem("scores", JSON.stringify(scores));
    scores.sort(compareSecondColumn);
    console.log(scores);
    scoreButtons.style.display = "flex";
    score.textContent = `${questionCounter[1]}
    correct out of ${questions.length} (${
        (questionCounter[1] / questions.length) * 100
    }%)`;
    startButton[1].addEventListener("click", displayFirstQuestion);
    viewScoreboard.addEventListener("click", showScoreboard);
}

function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    } else {
        return a[1] > b[1] ? -1 : 1;
    }
}

function showScoreboard() {
    clearAll();
    console.log(`showScoreboard`);
    try {
        clearInterval(interval);
    } catch {}
    let first = scoreboard.firstElementChild;
    while (first) {
        first.remove();
        first = scoreboard.firstElementChild;
    }
    for (let i = 0; i < scores.length; i++) {
        for (let j = 0; j < 2; j++) {
            let div = document.createElement("div");
            div.style.minWidth = "50%";
            // div.style.height = "100px";
            // div.style.background = "red";
            // div.style.color = "white";
            div.style.display = "flex";
            div.style.alignItems = "center";
            div.style.justifyContent = "center";
            if (j === 0) {
                div.textContent = `${scores[i][j]}`;
            } else {
                div.textContent = `${scores[i][j]}%`;
            }
            scoreboard.appendChild(div);
        }
    }
    scoreboardWrapper.style.display = "flex";
    startButton[2].addEventListener("click", displayFirstQuestion);
}

let timeOut = false;
function startTimer() {
    interval = setInterval(function () {
        if (time > 0) {
            time = time - 0.1;
            timeLeft.textContent = `${Math.round(time)}`;
        } else {
            timeOut = true;
            timeLeft.textContent = `0`;
            console.log("time over");
            clearInterval(interval);
            enterName();
        }
    }, 100);
}

viewHighScores.addEventListener("click", showScoreboard);

function displayCorrectWrong(status) {
    correctWrong.textContent = `Result: ${status}`;
}

function clearAll() {
    startButton[0].style.display = "none";
    currentScore.style.display = "none";
    finalPage.style.display = "none";
    scoreboardWrapper.style.display = "none";
    quiz.style.display = "none";
}
