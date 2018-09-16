import { WritableComponent } from "../lib/writable-component";

/* Writing the Current player turn -  holds the current turn number */
export class CurrentTurn extends WritableComponent {
  constructor() {
    super("current-turn");
    this.element.setAtrribute("style", "float: left");
  }

  set textContent(v) {
    super.textContent = `turn No: ${v}`;
  }
}
