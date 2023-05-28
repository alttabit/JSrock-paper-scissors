import Result from "./result.mjs";
import Stats from "./stats.mjs";
import { options, Outcomes } from "../utils/constants.mjs";

class Game {
  // Constructor called when new Game() is invoked
  constructor() {
    // Add the img and button nodes to the Game instance
    this.optionImgs = document.querySelectorAll("img");
    this.optionBtns = document.querySelectorAll("button");

    // Add onClick event to each button to trigger the startGame function
    this.optionBtns.forEach((option) =>
      option.addEventListener("click", this.startGame.bind(this))
    );

    // Add the player-score, result and pc-score nodes to the Game instance
    this.playerScore = document.querySelector(".player-score");
    this.result = document.querySelector(".result");
    this.pcScore = document.querySelector(".pc-score");

    // Initialise the game stats to 0
    this.stats = new Stats(0, 0, 0);
  }

  // Start the game
  startGame(e) {
    // Clear backgrounds for player/pc choices when a new game starts
    this.optionImgs.forEach((option) => (option.className = ""));

    // Retrieve player choice and generate pc choice
    const playerChoice = e.target.dataset.option;
    const pcChoice = options[Math.floor(Math.random() * options.length)];

    // Add appropriate backgrounds to images based on player/pc choice
    if (playerChoice === pcChoice) {
      [...this.optionImgs]
        .find((img) => img.dataset.option === pcChoice)
        .classList.add("round-draw");
    } else {
      [...this.optionImgs]
        .find((img) => img.dataset.option === playerChoice)
        .classList.add("player-choice");
      [...this.optionImgs]
        .find((img) => img.dataset.option === pcChoice)
        .classList.add("pc-choice");
    }

    // Update player stats
    const outcome = Result.whoWon(playerChoice, pcChoice);
    this.stats.updateStats(outcome);

    // Update text on page to display up to date stats
    this.render(outcome, this.stats.getStats());
  }

  // Update content on the page based on results
  render(outcome, stats) {
    this.playerScore.textContent = `You: ${stats.wins}`;
    this.pcScore.textContent = `PC: ${stats.losses}`;

    /*
      1. TODO: Write a switch statement that will conditionally
      show the correct text on the screen depending on whether
      the player wins, the pc wins, or if there's a draw.

      The following bit of code will update the result span
      with whatever text you'd like:
      this.result.textContent = "Insert Text Here";

      HINT: You can use the Outcomes variable to be access the
      different possible outcomes for each case. The outcome variable
      will have the value of who won the round.

      Remember to use console.log to inspect the data!

      Switch statement W3Schools Link:
      https://www.w3schools.com/js/js_switch.asp
    */
  }
}

export default Game;
