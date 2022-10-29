const questionText = document.querySelector("#questionText");
const ans1 = document.querySelector("#ans1");
const ans2 = document.querySelector("#ans2");
const ans3 = document.querySelector("#ans3");
const ans4 = document.querySelector("#ans4");
const answerContainer = document.querySelector(".answerContainer");
const quiz = document.querySelector(".quiz");
const timeLeft = document.querySelector("#timeLeft");
const startButton = document.querySelectorAll(".startButton");
const scoreboard = document.querySelector(".scoreboard");
const score = document.querySelector(".score");
const continueButton = document.querySelector(".continue");
quiz.style.display = "none";
scoreboard.style.display = "none";
const finalPage = document.querySelector(".finalPage");
const scoreButtons = document.querySelector(".scoreButtons");
const inputName = document.querySelector("#name");
const viewScoreboard = document.querySelector(".viewScoreboard");
const form = document.querySelector(".form");
const congrats = document.querySelector(".congrats");

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

const questions = [q1, q2, q3, q4];

let questionCounter = [0, 0]; // [total, right]

startButton[0].addEventListener("click", displayFirstQuestion);

function displayFirstQuestion() {
    scoreboard.style.display = "none";
    questions.sort(() => Math.random() - 0.5); // shuffle the questions
    quiz.style.display = "flex";
    startButton[0].style.display = "none";
    let question = questions[questionCounter[0]];
    questionText.innerHTML = question.q;
    ans1.innerHTML = question.a1;
    ans2.innerHTML = question.a2;
    ans3.innerHTML = question.a3;
    ans4.innerHTML = question.a4;
    answerContainer.addEventListener("click", checkAnswerAndGoToNext);
}

function checkAnswerAndGoToNext(event) {
    let ans = event.target;

    // check if clicked on button
    if (ans.matches("button")) {
        // if the answer matches the correct in object
        if (ans.innerHTML === questions[questionCounter[0]].corr) {
            console.log(`correct`);
            questionCounter[1]++;
        } else {
            console.log(
                `you chose ${ans.innerHTML} the corrct was ${
                    questions[questionCounter[0]].corr
                }`
            );
        }
        questionCounter[0]++;
        if (questionCounter[0] === questions.length) {
            questionCounter[0] = 0;
            enterName();
        } else {
            let question = questions[questionCounter[0]];
            questionText.innerHTML = question.q;
            ans1.innerHTML = question.a1;
            ans2.innerHTML = question.a2;
            ans3.innerHTML = question.a3;
            ans4.innerHTML = question.a4;
            console.log(`question ${questionCounter[0] + 1} displayed`);
        }
    }
}

let scores = [];

function enterName() {
    scoreboard.style.display = "flex";
    congrats.style.display = "flex";
    quiz.style.display = "none";
    finalPage.style.display = "none";
    continueButton.addEventListener("click", showScore);
}

function showScore() {
    congrats.style.display = "none";
    finalPage.style.display = "block";
    scores = scores.concat([
        [
            `${inputName.value}`,
            `${(questionCounter[1] / questions.length) * 100}%`,
        ],
    ]);
    scores.sort(compareSecondColumn);
    console.log(scores);
    scoreButtons.style.display = "flex";
    score.innerHTML = `${questionCounter[1]}
    correct out of ${questions.length} (${
        (questionCounter[1] / questions.length) * 100
    }%)`;
    questionCounter = [0, 0];
    startButton[1].addEventListener("click", displayFirstQuestion);
    // viewScoreboard.addEventListener("click", showScoreboard)
}
