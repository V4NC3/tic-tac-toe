import { createSquare } from "./map";

/* Defining the winning condition */
export class WinCondition {
  constructor(field = createSquare(3)) {
    this.field = field;
  }

  /* Iterate through each Horizontal row and check if all of the columns are occupied with the same symbol. If every column on one row is of the provided symbol, it will return true and we then return the inspectingRow with all the information necessary to the HUD
   */

  horizontalLine(symbol) {
    let inspectingRow = [];
    return (
      this.field.some(row => {
        inspectingRow = row;
        return row.every(slot => slot.occupied && slot.symbol == symbol);
      }) && inspectingRow
    );
  }

  /* Vertical column aggregates that checks each row, then checks if every element inside passes a condition */
  verticalLine() {
    return this.field.some((row, index) => {
      let inspectingColumn = [];
      for (let x = this.field.length - 1; x > -1; x--) {
        inspectingColumn.push(this.field[x][index]);
      }
      return (
        inspectingColumn.every(
          slot => slot.occupied && slot.symbol == symbol
        ) && inspectingColumn
      );
    });
  }
}
