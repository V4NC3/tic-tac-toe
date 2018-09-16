import { SimpleComponent } from "../lib/simple-component";
import { PlaySymbol } from "./play-symbol";
import { CurrentTurn } from "./current-turn";

/* Wraps CurrentTurn and Symbol into a whole Component */
export class TurnInformation extends SimpleComponent {
  constructor() {
    super("turn-information");
    this.currentTurn = new CurrentTurn();
    this.symbol = new PlaySymbol();
    this.element.setAttribute(
      "style",
      "text-transform: uppercase; font-size: 30px; height: 40px; display: block; font-family: Monospace"
    );

    this.element.appendChild(this.currentTurn.element);
    this.element.appendChild(this.symbol.element);
  }

  /* updates both components */
  update(turn, symbol) {
    this.currentTurn.textContent = turn || 0;
    this.symbol.textContent = symbol || "";
  }
}
