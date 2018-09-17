import { GameEngine } from "../lib/game-engine";
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
    this.turn = 0;
    this.gameEngine = new GameEngine(["x", "o"], lastWinner);

    /* If GameField component exists in the page, remove that child from the body so we can insert a new/clean one */
    const oldGameField = document.querySelector("game-field");
    if (oldGameField) document.body.removeChild(oldGameField);

    /* New GameField component */
    this.gameField = new GameField(this.gameEngine.field);
  }
}
