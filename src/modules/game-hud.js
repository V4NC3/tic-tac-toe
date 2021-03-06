import { GameEngine } from "../libs/game-engine";
import { GameField } from "../components/game-field";
import { Notice } from "../components/notice";
import { TurnInformation } from "../components/turn-information";

/* GameHud Class brings all the Components together into the DOM and the hub between the user interface and the Game Engine */
export class GameHud {
  constructor() {
    this.turns = null;
    this.gameEngine = null;
    this.gameField = null;
    this.turnInfo = new TurnInformation();

    document.body.appendChild(this.turnInfo.element);
    this.createGameField(false);
  }

  createGameField(lastWinner = "x") {
    this.turns = 0;
    this.gameEngine = new GameEngine(["x", "o"], lastWinner);

    /* If GameField component exists in the page, remove that child from the body so we can insert a new/clean one */
    const oldGameField = document.querySelector("game-field");
    if (oldGameField) document.body.removeChild(oldGameField);

    /* New GameField component */
    this.gameField = new GameField(this.gameEngine.field);

    /* Click events to the GameSlot */
    this.gameField.items.forEach(row => {
      row.items.forEach(slot => {
        slot.element.addEventListener("click", element =>
          this.occupyField(element)
        );
      });
    });

    /* Append the GameField element to the body of the page */
    document.body.appendChild(this.gameField.element);

    /* Show Notice to user and update the turn info via TurnInfo */
    new Notice(`Game Start! First to Play: ${this.gameEngine.turnOf}`, 3000);
    this.turnInfo.update(this.turns, this.gameEngine.turnOf);
  }

  get isGameEnd() {
    return this.gameEngine.isWinner || this.gameEngine.isTie;
  }

  /* Show GameEnd notice and restart game */
  processGameEnd() {
    let winner = false;
    if (this.gameEngine.isWinner) {
      new Notice(
        `Game End! Winner is ${this.gameEngine.turnOf}! Game took ${
          this.turns
        } turns`,
        1500
      );
      winner = this.gameEngine.turnOf;
    } else if (this.gameEngine.isTie) {
      new Notice(`Game End! It's a Tie! Game took ${this.turns} turns`, 1500);
    }

    setTimeout(() => {
      this.createGameField(winner);
    }, 1500);
  }

  /* Occupying the fields */
  occupyField(element) {
    let coords = {
      row: parseInt(element.target.getAttribute("slot-row"), 10),
      column: parseInt(element.target.getAttribute("slot-column"), 10)
    };

    let turnAction = this.gameEngine.occupyField(coords);
    if (!turnAction) {
      new Notice("This field is already occupied");
      return;
    }

    this.turns++;

    if (this.isGameEnd) {
      this.processGameEnd();
    } else {
      this.gameEngine.toggleTurn();
      this.turnInfo.update(this.turns, this.gameEngine.turnOf);
    }

    this.gameField
      .getItem(turnAction.row)
      .getItem(turnAction.column).textContent = turnAction;
  }
}
