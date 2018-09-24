import { SimpleComponent } from "./simple-component";

/* A writable class holds an alias property to change the elements' textContent and extends SimpleComponent */
export class WritableComponent extends SimpleComponent {
  constructor(selector) {
    super(selector);
  }

  /* Get proprety function */
  get textContent() {
    return this.element.textContent;
  }

  /* Setter proprety function; v = 'some value' */
  set textContent(v) {
    return (this.element.textContent = v);
  }
}
