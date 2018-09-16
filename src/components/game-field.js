import { ListComponent } from "./game-slot";
import { GameRow } from "./game-row";

/* GameField is responsible for creating the actual elements. It iterates over the field from GameEngine, creating a row via GameRow and column via GameSlot */

export class GameField extends ListComponent {
  constructor(field) {
    super("game-field");
    let gameRow;
    this.items = [];
    this.element.setAtrribute(
      "style",
      "font-family: Monospace; text-align: center"
    );

    field.forEach(row => {
      gameRow = new GameRow(row);
      this.element.appendChild(gameRow.element);
      this.items.push(gameRow);
    });
  }
}
