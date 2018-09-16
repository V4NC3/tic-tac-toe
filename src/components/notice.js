import { SimpleComponent } from "../lib/simple-component";
import { BackgroundPane } from "./background-page";

/* Notice Component - show the user any special message and will auto-delete after X seconds */
export class Notice extends SimpleComponent {
  constructor(text, interval = 1000) {
    super("notice");

    /* Checking for existing notice and deleting it */
    let element = document.querySelector(this.selector);
    if (element) this.removeElements();

    this.element.setAttribute(
      "style",
      "position: absolute; top: 20%; background-color: white; z-index: 11;" +
        "text-align: center; front-family: Monospace; font-size: 25px; width 100%;"
    );
  }
}
