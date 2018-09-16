import { ListComponent } from "../lib/list-component";
import { GameSlot } from "./game-slot";

/* GameRow iterates the rows to create the respective GameSlot */
export class GameRow extends ListComponent {
  /* init the Array of slots */
  constructor(row) {
    super("game-row");
    let gameSlot;
    this.items = [];
    this.element.setAttribute("style", "display: block;");

    row.forEach(slot => {
      gameSlot = new GameSlot(slot);
      this.element.appendChild(gameSlot.element);
      this.items.push(gameSlot);
    });
  }
}
