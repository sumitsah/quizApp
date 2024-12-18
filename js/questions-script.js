import quizData from './data.js';

// using import as parcel will require all the images at the bundling time
import correctSVG from '../assets/images/correct.svg';
import wrongSVG from '../assets/images/wrong.svg';
import volumeICON from '../assets/images/volume-icon.svg';
import muteICON from '../assets/images/mute.svg';

let timerId = setInterval(countdown, 1000);
let questionTimerId, result = [];
const questionCard = document.querySelector('.question-card');
const optionSpans = document.querySelectorAll('.option span');
const answers = document.querySelectorAll('.answer');
const next = document.querySelector('.next');
const questionIndex = document.querySelector('.summary span');
const timer = document.querySelector('.timer');
const body = document.querySelector('body');
const retry = new URLSearchParams(location.search).get("retry");
const audioPlayer = document.querySelector('#audio-player');
const soundbar = document.querySelector('.soundbar');
const soundIcon = document.querySelector('.sound-icon');
const correctSoundPlayer = document.querySelector('#correct-sound-player');
const wrongSoundPlayer = document.querySelector('#wrong-sound-player');
let upadtedUrl = 'pages/questions.html';

if (localStorage.getItem('quizData') === null || retry) {
    localStorage.setItem('quizData', JSON.stringify(quizData));
    // remove retry because if a user refresh it will reload all the question again.
    window.history.pushState({}, document.title, "/" + upadtedUrl);
}

let currentQuizData = JSON.parse(localStorage.getItem('quizData'));
let currentQuestionIndex, i, correctAnswerCount = 0;
let currentQuestion = Object.values(currentQuizData).filter((question, index) => {
    if (question.presentQuestion) {
        currentQuestionIndex = index;
        return question
    }
})

questionIndex.innerText = hasOneDigit(currentQuestionIndex + 1) ? `0${currentQuestionIndex + 1}` : currentQuestionIndex + 1;

let currentQ = Object.assign(...currentQuestion.map(key => key))
questionCard.innerText = currentQ.question;
let timeLeft = 30;

function hasOneDigit(n) {
    return n >= -9 && n <= 9
}


function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
    } else {
        timer.innerHTML = hasOneDigit(timeLeft) ? `00:0${timeLeft}` : `00:${timeLeft}`
        timeLeft--;
    }
    if (timeLeft >= 5 && timeLeft < 15) {
        body.classList.add('green-earth');
        timer.classList.add('dark-beige');
        next.classList.add('dark-goldenrod')
    } else if (timeLeft >= 0 && timeLeft < 5) {
        body.classList.add('pale');
        timer.classList.add('racing-red');
        next.classList.add('next-red');
    } else {
        body.classList.remove('green-earth', 'pale');
        timer.classList.remove('racing-red', 'dark-beige');
        next.classList.remove('next-red', 'dark-goldenrod');
    }
}

let iteration = [];
for (let i = 1; i <= 4; i++) {
    optionSpans[i - 1].innerText = Object.values(currentQ)[i];
}

i = ++currentQuestionIndex;

iteration = Object.values(currentQuizData);


answers.forEach(answer => {
    answer.addEventListener('click', e => {
        currentQ = Object.assign(...currentQuestion.map(key => key))
        if (Object.values(iteration[i - 1])[5] === e.currentTarget.id) {
            correctSoundPlayer.play();
            result = JSON.parse(localStorage.getItem('result')) || result;
            if (!result[i - 1]) {
                result[i - 1] = true;
                localStorage.setItem('result', JSON.stringify(result));
            }
            e.currentTarget.classList.add('correct');
            // e.currentTarget.children[1].children[0].insertAdjacentElement('afterend', createImgtag(correctSVG));
            e.currentTarget.children[1].children[1].setAttribute('src', correctSVG);
        } else {
            e.currentTarget.classList.add('wrong');
            wrongSoundPlayer.play();
            let wrongAnswer = document.getElementById(`${Object.values(iteration[i - 1])[5]}`);
            wrongAnswer.classList.add('correct');

            // wrongAnswer.children[1].children[0].insertAdjacentElement('afterend', createImgtag(correctSVG));
            wrongAnswer.children[1].children[1].setAttribute('src', correctSVG);
            e.currentTarget.children[1].children[0].innerText = 'You chose';

            // e.currentTarget.children[1].children[0].insertAdjacentElement('afterend', createImgtag(wrongSVG));
            e.currentTarget.children[1].children[1].setAttribute('src', wrongSVG);
        }
    })
})

function iterateQuestion() {
    if (i < iteration.length) {
        //  update current and previous question flag
        Object.values(iteration[i - 1])[6] = currentQuizData[`${i}`].presentQuestion = false;
        Object.values(iteration[i])[0] = currentQuizData[`${i + 1}`].presentQuestion = true;
        questionIndex.innerText = hasOneDigit(i + 1) ? `0${i + 1}` : i + 1;
        // update localstorage
        localStorage.setItem('quizData', JSON.stringify(currentQuizData))

        //   render options in view
        for (let j = 1; j <= 4; j++) {
            optionSpans[j - 1].innerText = Object.values(iteration[i])[j];
            let optionElement = optionSpans[j - 1].parentElement.parentElement;
            optionElement.classList.remove('wrong', 'correct');
            optionElement.children[1].children[0].innerText = '';
            // if (optionElement.children[1].children[1]) {
            //     optionElement.children[1].children[1].remove();
            // }
            optionElement.children[1].children[1].setAttribute('src', '')
        }
        questionCard.innerText = Object.values(iteration[i])[0];
        i++;
    } else {
        correctAnswerCount = result.filter(ele => ele).length;
        localStorage.removeItem('result');
        window.location.replace(`${window.location.origin}/pages/result.html?result=${correctAnswerCount}`);
        clearInterval(timerId);
        clearInterval(questionTimerId);
    }
}

function questionReset() {
    questionTimerId = setInterval(() => {
        iterateQuestion();
        resetTimer();
    }, 31000)
}

questionReset();
function resetTimer() {
    timeLeft = 30;
}
next.addEventListener('click', (e) => {
    clearInterval(timerId)
    clearInterval(questionTimerId);
    questionReset();
    resetTimer();
    timerId = setInterval(countdown, 1000);
    iterateQuestion();
})

soundbar.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        soundIcon.setAttribute('src', volumeICON)
    } else {
        audioPlayer.pause();
        soundIcon.setAttribute('src', muteICON)
    }
})

audioPlayer.addEventListener('ended', () => {
    audioPlayer.play();
}, false);

// no need to use this function as empty svg image works but for production we might be using this. 
function createImgtag(assetUrl) {
    let img = document.createElement('img');
    // imgSource = require('../assets/images/correct.svg') ? require('../assets/images/correct.svg') : '../assets/images/correct.svg'; only when using both live server and parcel
    img.setAttribute('src', assetUrl);
    return img;
}