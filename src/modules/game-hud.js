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
}
