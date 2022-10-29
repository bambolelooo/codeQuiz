const questionText = document.querySelector("#questionText");
const ans1 = document.querySelector("#ans1");
const ans2 = document.querySelector("#ans2");
const ans3 = document.querySelector("#ans3");
const ans4 = document.querySelector("#ans4");
const answerContainer = document.querySelector(".answerContainer");
const quiz = document.querySelector(".quiz");
const timeLeft = document.querySelector("#timeLeft");
const welcomeButton = document.querySelector(".welcomeButton");
quiz.style.display = "none";

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

let questionCounter = [0, 0, 0]; // [total, right, wrong]

welcomeButton.addEventListener("click", displayFirstQuestion);

function displayFirstQuestion() {
    questions.sort(() => Math.random() - 0.5); // shuffle the questions
    quiz.style.display = "flex";
    welcomeButton.style.display = "none";
    let question = questions[questionCounter[0]];
    questionText.innerHTML = question.q;
    ans1.innerHTML = question.a1;
    ans2.innerHTML = question.a2;
    ans3.innerHTML = question.a3;
    ans4.innerHTML = question.a4;
    console.log(`question ${questionCounter[0] + 1} displayed`);
    answerContainer.addEventListener("click", checkAnswerAndGoToNext);
}

function checkAnswerAndGoToNext(event) {
    let ans = event.target;
    if (ans.matches("button")) {
        if (ans.innerHTML === questions[questionCounter[0]].corr) {
            console.log(`correct`);
        } else {
            console.log(
                `you chose ${ans.innerHTML} the corrct was ${
                    questions[questionCounter[0]].corr
                }`
            );
            questionCounter[2]++;
        }
        questionCounter[0]++;
        if (questionCounter[0] === questions.length) {
            questionCounter[0] = 0;
            //view scoreboard
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
