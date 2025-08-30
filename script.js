let storedNumber;
let attempts = 0;

const setupDiv = document.getElementById('setup');
const gameDiv = document.getElementById('game');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');

document.getElementById('startGame').addEventListener('click', () => {
    storedNumber = Number(document.getElementById('storedNumber').value);
    attempts = 0;
    setupDiv.style.display = 'none';
    gameDiv.style.display = 'block';
    feedback.textContent = '';
    attemptsDisplay.textContent = '';
});

document.getElementById('guessBtn').addEventListener('click', () => {
    const userInput = Number(document.getElementById('guess').value);
    attempts++;

    if (userInput < storedNumber) {
        feedback.textContent = "Try Higher";
    } else if (userInput > storedNumber) {
        feedback.textContent = "Try Lower";
    } else {
        feedback.textContent = `You Got It! It Took You ${attempts} ${attempts === 1 ? "guess" : "guesses"}`;
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;
});