## 🎮 Rock-Paper-Scissors-game

A fun, interactive, and visually appealing web implementation of the classic game Rock, Paper, Scissors. Play against the computer in a best-of-five-rounds match!

---

### ✨ Features

* **Classic Gameplay:** Standard Rock, Paper, Scissors rules (best-of-five rounds).
* **Modern UI/UX:** Clean design using **HTML** and **CSS**.
* **Dynamic Styling:** Utilizes **CSS animations** for score updates, results, and button interactions to provide an engaging experience.
* **Score Tracking:** Keeps track of the **Player** and **Computer** scores across the rounds.
* **Clear Results:** Displays the result of each round and the final game winner.
* **Responsive Design:** Optimized for both desktop and mobile screens.

---

### 🕹️ How to Play

1.  **Open the Game:** Simply open the `index.html` file in your web browser.
2.  **Start Playing:** The game is set to a **best-of-5 rounds** match.
3.  **Make Your Choice:** Click on one of the three choice buttons:
    * **🪨 Rock**
    * **📄 Paper**
    * **✂️ Scissors**
4.  **View Results:** After each click, the computer's choice is revealed, the winner is determined, and the score is updated.
5.  **Game End:** The game concludes after the 5th round, displaying the overall winner.
6.  **New Game:** Click the **"Play Again"** button to reset the scores and start a new match.

---

### 🚀 Technologies Used

* **HTML5:** For the structure and layout of the game.
* **CSS3:** For modern styling, responsiveness, and all dynamic visual effects/animations.
* **JavaScript (ES6):** For handling all game logic, random computer choices, score management, and updating the DOM.

---

### 🧑‍💻 Code Structure Breakdown

The project is divided into three files:

* **`index.html`**: The main file containing the game's structure, score displays, choice buttons, and result areas. It links to the CSS and JavaScript files.
* **`styles.css`**: Contains all the styling for the game, including the responsive layout and various keyframe animations (e.g., `gradientShift`, `scorePulse`, `resultBounce`) to enhance the user experience.
* **`script.js`**: Contains the core game logic:
    * `playRound()`: The main function triggered by a button click.
    * `getComputerChoice()`: Randomly selects 'rock', 'paper', or 'scissors'.
    * `determineWinner()`: Compares choices and returns 'win', 'lose', or 'draw'.
    * `endGame()`: Handles the end of the 5th round, displaying the final result and the "Play Again" button.
    * `resetGame()`: Resets all variables and the UI for a new match.

---

### 🤝 Contribution

Feel free to fork this repository and submit pull requests for any improvements or bug fixes!

---
***
