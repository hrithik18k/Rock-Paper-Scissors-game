let playerScore = 0;
let computerScore = 0;
let currentRound = 1;
const maxRounds = 5;

const choiceBtns = document.querySelectorAll('.choice-btn');
const playerScoreEl = document.getElementById('playerScore');
const computerScoreEl = document.getElementById('computerScore');
const currentRoundEl = document.getElementById('currentRound');
const roundResultEl = document.getElementById('roundResult');
const movesEl = document.getElementById('moves');
const finalResultEl = document.getElementById('finalResult');
const playAgainBtn = document.getElementById('playAgainBtn');

const choiceEmojis = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️'
};
choiceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const playerChoice = btn.dataset.choice;
        playRound(playerChoice);
    });
});
playAgainBtn.addEventListener('click', resetGame);
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    if (result === 'win') {
        playerScore++;
    } else if (result === 'lose') {
        computerScore++;
    }
    updateScores();
    displayRoundResult(result, playerChoice, computerChoice);
    if (currentRound >= maxRounds) {
        endGame();
    } else {
        currentRound++;
        currentRoundEl.textContent = currentRound;
    }
}
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    }
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    }
    
    return 'lose';
}
function updateScores() {
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
}
function displayRoundResult(result, playerChoice, computerChoice) {
    roundResultEl.className = 'round-result ' + result;
    
    if (result === 'win') {
        roundResultEl.textContent = '🎉 You Win!';
    } else if (result === 'lose') {
        roundResultEl.textContent = '😢 You Lose!';
    } else {
        roundResultEl.textContent = '🤝 It\'s a Draw!';
    }
    
    movesEl.textContent = `You chose ${choiceEmojis[playerChoice]} | Computer chose ${choiceEmojis[computerChoice]}`;
}
function endGame() {
    choiceBtns.forEach(btn => btn.disabled = true);
    let finalMessage = '';
    let resultClass = '';
    
    if (playerScore > computerScore) {
        finalMessage = '🏆 Congratulations! You Won the Game!';
        resultClass = 'victory';
    } else if (computerScore > playerScore) {
        finalMessage = '💻 Computer Wins! Better Luck Next Time!';
        resultClass = 'defeat';
    } else {
        finalMessage = '🤝 It\'s a Tie! Well Played!';
        resultClass = 'tie';
    }
    
    finalResultEl.textContent = finalMessage;
    finalResultEl.className = 'final-result ' + resultClass;
    playAgainBtn.classList.add('show');
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    currentRound = 1;
    updateScores();
    currentRoundEl.textContent = currentRound;
    roundResultEl.textContent = '';
    roundResultEl.className = 'round-result';
    movesEl.textContent = '';
    finalResultEl.textContent = '';
    finalResultEl.className = '';
    playAgainBtn.classList.remove('show');
    choiceBtns.forEach(btn => btn.disabled = false);
}