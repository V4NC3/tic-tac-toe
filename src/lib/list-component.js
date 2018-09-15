import { SimpleComponent } from "./simple-component";

/* List Component to house other components that will be used to pass 'items' so that the 'getItem' statement can retrieve it */

export class ListComponent extends SimpleComponent {
  constructor(selector) {
    super(selector);
    this.items = [];
  }

  getItem(index) {
    if (typeof index !== "number")
      throw Error("getRow must have a number as an argument");
    if (index < 0 || index > this.items.length) throw Error("out of Bounds");
    return this.items[index];
  }
}
