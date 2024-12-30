// Stopwatch functionality
let stopwatchInterval;
let stopwatchTime = 0;

const stopwatchDisplay = document.getElementById("stopwatch-display");
const startStopwatchButton = document.getElementById("start-stopwatch");
const stopStopwatchButton = document.getElementById("stop-stopwatch");
const resetStopwatchButton = document.getElementById("reset-stopwatch");

startStopwatchButton.addEventListener("click", () => {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            updateStopwatchDisplay();
        }, 1000);
    }
});

stopStopwatchButton.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
});

resetStopwatchButton.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    stopwatchTime = 0;
    updateStopwatchDisplay();
});

function updateStopwatchDisplay() {
    const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
    const seconds = String(stopwatchTime % 60).padStart(2, '0');
    stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Timer functionality
let timerInterval;
const timerDisplay = document.getElementById("timer-display");
const timerInput = document.getElementById("timer-input");
const startTimerButton = document.getElementById("start-timer");

startTimerButton.addEventListener("click", () => {
    const minutes = parseInt(timerInput.value);
    if (isNaN(minutes) || minutes <= 0) {
        alert("Please enter a valid number of minutes.");
        return;
    }

    let timeRemaining = minutes * 60; // Convert minutes to seconds
    timerDisplay.textContent = formatTime(timeRemaining);

    clearInterval(timerInterval); // Clear any existing timer
    timerInterval = setInterval(() => {
        timeRemaining--;
        timerDisplay.textContent = formatTime(timeRemaining);

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        }
    }, 1000);
});

function formatTime(seconds) {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
    const remainingSeconds = String(seconds % 60).padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
}