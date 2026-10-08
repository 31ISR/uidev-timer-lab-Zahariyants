let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const hoursCircle = document.getElementById("hours-circle");
const minutesCircle = document.getElementById("minutes-circle");
const secondsCircle = document.getElementById("seconds-circle");

const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const lapBtn = document.getElementById('lap-btn');
const resetBtn = document.getElementById('reset-btn');

const lapsContainer = document.getElementById("lapsContainer");
const lapList = document.getElementById("lapList");

function updateDisplay() {
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;
}

hoursDisplay.textContent = formatTime(hours);
minutesDisplay.textContent = formatTime(minutes);
secondsDisplay.textContent = formatTime(seconds);

startBtn.addEventListener('click', () => {
    if (!timeInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 100);
    }
});

stopBtn.addEventListener('click', () => {
    if (timeInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
});

lapBtn.addEventListener('click', () => {
    if (elapsedTime > 0) {
        const currentLapTime = '${hoursDisplay.textContent}:${minutesDisplay.textContent}:${secondsDisplay.textContent}';
        console.log('Круг зафиксирован: ${currentLapTime}')
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    updateDisplay();
});