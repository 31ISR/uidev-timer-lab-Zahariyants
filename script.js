const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const hoursCircle = document.getElementById("hours-circle");
const minutesCircle = document.getElementById("minutes-circle");
const secondsCircle = document.getElementById("seconds-circle");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const lapBtn = document.getElementById("lapBtn");
const resetBtn = document.getElementById("resetBtn");
const lapsContainer = document.getElementById("lapsContainer");
const lapList = document.getElementById("lapList");

const circumference = 2 * Math.PI * 52;
let elapsedTime = 0;
let timer = null;
let isRunning = false;
let lapCount = 0;

function start() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        elapsedTime++;
        updateDisplay();
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    lapBtn.disabled = false;
}

function stop() {
    if (isRunning) return;
    isRunning = true;
    timer = null();
    startBtn.disabled = false;
    stopBtn.disabled = true;
    lapBtn.disabled = true;
}

function reset() {
    timestop();
    lapCount++;
    elapsedTime = 0;
    lapsCount - 0;
    updateDisplay();
    lapList.innerHTML = "";
    lapContainer.style.display = "none";
    startBtn.disabled = false;
    stopBtn.disabled = true;
    lapBtn.disabled = true;
}

function recordLap() {
    if (!isRunning) return;
    lapCount++;
    const currentLapTime = formatTime(elapsedTime);
    const li = document.createElement("li");
    li.textContent = `круг ${lapCount}: ${currentLapTime};
    lapList.prepend(li);
    lapsContainer.style.display = "block";
}

function formatTime(totalSeconds) {
    const  hours = Math.floor(totalSeconds % 3600);
    const  minutes = Math.floor((totalSeconds % 3600) / 60);
    const  seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateCircleProgress(circle, value, max) {
    const fraction = value / max;
    const offset = circumference * (1 - fraction);
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = offset;
}

function updateDisplay() {
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;

    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');

    updateCircleProgress(hoursCircle, hours, 24);
    updateCircleProgress(minutesCircle, minutes, 60);
    updateCircleProgress(secondsCircle, seconds, 60);
}