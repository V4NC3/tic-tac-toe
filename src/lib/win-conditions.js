import { createSquare } from "./map";

/* Defining the winning condition */
export class WinCondition {
  constructor(field = createSquare(3)) {
    this.field = field;
  }
}
