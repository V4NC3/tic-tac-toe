import { SimpleComponent } from "./simple-component";

/* List Component to house other components that will be used to pass 'items' so that the 'getItem' statement can retrieve it */

export class ListComponent extends SimpleComponent {
  constructor(selector) {
    super(selector);
    this.items = [];
  }
}
