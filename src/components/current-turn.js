import { WritableComponent } from "../libs/writable-component";

/* Writing the Current player turn -  holds the current turn number */
export class CurrentTurn extends WritableComponent {
  constructor() {
    super("current-turn");
    this.element.setAttribute("style", "float: left");
  }

  set textContent(v) {
    super.textContent = `turn No: ${v}`;
  }
}
