let startBtn = document.getElementById('start');
const screens = document.querySelectorAll('.screen');
const timeBtn = document.getElementById('time-list');
const timeEl = document.getElementById('time');
const board = document.getElementById('board');
let time = 0;
let score = 0;

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up')
});


timeBtn.addEventListener('click', e => {
    if (e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame(time)
    }
});

board.addEventListener('click', e => {
    if (e.target.classList.contains('circle')) {
        score++;
        e.target.remove();
        createRandom()
    }
});


function startGame() {
    setInterval(decreaseTime, 1000);
    createRandom();
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }

}

const getzero = (time) => {
    if (time < 10) {
        return `0${time}`
    } else {
        return time
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${getzero(time)}`
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Ваш счёт : <span class="primary">${score}</span></h1>`

}

function createRandom() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 90);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${x}px`;
    circle.style.left = `${y}px`;


    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}




