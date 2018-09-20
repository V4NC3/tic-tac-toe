import { createSquare } from "./map";

/* Defining the winning condition */
export class WinCondition {
  constructor(field = createSquare(3)) {
    this.field = field;
  }

  /* Horizontal row and check if all of the columns are occupied with the same symbol. If every column on one row is of the provided symbol, it will return true and we then return the inspectingRow with all the information necessary to the HUD
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
  verticalLine(symbol) {
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

  /* Diagonal line, checking if the center field is being used or empty */
  diagonalLine(symbol) {
    const length = this.field.length - 1;
    const middle = length / 2;

    /* Checking if the middle and one of the corners are unoccupid, if true then there isnt a winner at this time which will return false */
    if (
      !this.field[middle][middle].occupied &&
      (!this.field[length][0].occupied || !this.field[0][0].occupied)
    )
      return false;

    /* Checking which column is occupied and which symbol */
    let column =
      this.field[0][0].occupied && this.field[0][0].symbol === symbol
        ? 0
        : this.field[0][length].occupied &&
          this.field[0][length].symbol === symbol
          ? length
          : false;

    /* Checking the assigned number in the column to see if the corners are occupied */
    if (typeof column !== "number") return false;
  }
}
