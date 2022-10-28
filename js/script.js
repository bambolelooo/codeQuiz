const questionText = document.querySelector("#questionText");
const ans1 = document.querySelector("#ans1");
const ans2 = document.querySelector("#ans2");
const ans3 = document.querySelector("#ans3");
const ans4 = document.querySelector("#ans4");
const quiz = document.querySelector(".quiz");
const timeLeft = document.querySelector("#timeLeft");
const welcomeButton = document.querySelector(".welcomeButton");
quiz.style.display = "none";
welcomeButton.addEventListener("click", () => {
    quiz.style.display = "flex";
    welcomeButton.style.display = "none";
});

const q1 = {
    q: `This is question 1. The corrct answer is 1`,
    a1: `1`,
    a2: `2`,
    a3: `3`,
    a4: `4`,
    corr: this.a1,
};
const q2 = {
    q: `This is question 2. The corrct answer is 2`,
    a1: `1`,
    a2: `2`,
    a3: `3`,
    a4: `4`,
    corr: this.a2,
};
const q3 = {
    q: `This is question 3. The corrct answer is 3`,
    a1: `1`,
    a2: `2`,
    a3: `3`,
    a4: `4`,
    corr: this.a3,
};
const q4 = {
    q: `This is question 4. The corrct answer is 4`,
    a1: `1`,
    a2: `2`,
    a3: `3`,
    a4: `4`,
    corr: this.a4,
};

const questions = [q1, q2, q3, q4];
questions.sort(() => Math.random() - 0.5);
for (let i = 0; i < questions.length(); i++) {}

setInterval(startQuiz(), 1000){
}

startQuiz(){

}
