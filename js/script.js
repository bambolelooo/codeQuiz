const questionText = document.querySelector("#questionText");
const ans1 = document.querySelector("#ans1");
const ans2 = document.querySelector("#ans2");
const ans3 = document.querySelector("#ans3");
const ans4 = document.querySelector("#ans4");
const quiz = document.querySelector(".quiz");
const welcomeButton = document.querySelector(".welcomeButton");
quiz.style.display = "none";
welcomeButton.addEventListener("click", () => {
    quiz.style.display = "flex";
    welcomeButton.style.display = "none";
});
