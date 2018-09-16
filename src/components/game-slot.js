import { WritableComponent } from "../lib/writable-component";

/* GameSlot Class that's maintaining the visual correlation between the GameEngine */
export class GameSlot extends WritableComponent {
  /* Class takes slot as an argument */

  constructor(slot) {
    super("game-slot");

    /* Style element after calling the Super Class. Calling all the browser functionalities */
    this.element.setAttribute(
      "style",
      "height: 60px; width: 60px; background-color: grey; display: inline-block; " +
        "border: 1px solid black; margin: 5px; font-size: large; color: black; line-height: 60px;" +
        "text-align: center; cursor: pointer"
    );

    this.element.setAttribute("slot-row", slot.row);
    this.element.setAttribute("slot-column", slot.column);
    this.element.textContent = "-";
  }

  /* Overwriting the base Class because we want to do more than just setting the value */
  set textContent(slot) {
    super.textContent = slot.symbol;
    this.element.style.backgroundColor = "white";
  }
}
