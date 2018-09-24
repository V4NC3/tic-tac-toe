import { WritableComponent } from "../libs/writable-component";

/* Shows the Symbol that's in play */
export class PlaySymbol extends WritableComponent {
  constructor() {
    super("symbol");
    this.element.setAttribute("style", "float: right");
  }

  set textContent(v) {
    super.textContent = `playing: ${v}`;
  }
}
