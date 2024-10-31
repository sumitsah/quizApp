const result = document.querySelector("#result");
const correct = document.querySelector(".correct");
const wrong = document.querySelector(".wrong");
const rightAttempt = document.querySelector(".right-attempt");
const retryBtn = document.querySelector(".retry-btn");
const attemptQuestion = new URLSearchParams(location.search).get("result");
result.innerText = attemptQuestion;
const totalQuestion = 25;
let attemptQuestionPer = attemptQuestion / totalQuestion * 100;

correct.innerText = `${attemptQuestionPer}%`;
wrong.innerText = `${100 - attemptQuestionPer}%`;

rightAttempt.style.width = `${attemptQuestionPer}%`;

retryBtn.addEventListener('click', () => {
    window.location.replace(`${window.location.origin}/pages/questions.html?retry=true`);
})