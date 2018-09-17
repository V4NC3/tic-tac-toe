import { SimpleComponent } from "../lib/simple-component";

/* Semi-transparent back-pane to let the client knows who's turn */
export class BackgroundPane extends SimpleComponent {
  constructor() {
    super("background-pane");
    this.element.setAttribute(
      "style",
      "position: absolute; top: 0; height: 100%; width: 100%;" +
        "background-color: black; opacity: .5; z-index:10"
    );
  }
}