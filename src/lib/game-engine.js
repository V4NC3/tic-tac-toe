"use strict";
import { WinCondition } from "./win-conditions";
import { createSquare } from "./map";

/* GameEngine Class to manage turns, field occupation, if have symbols won, and line made */
export class GameEngine {
  constructor(symbols, lastWinner) {
    if (!symbols || symbols.length !== 2)
      throw Error("A game must be made of two symbols");
    this.turnOf = lastWinner
      ? lastWinner
      : Math.round(Math.random()) === 0
        ? symbols[0]
        : symbols[1];
    this.symbols = symbols;
    this.field = createSquare(3);
    this.winCondition = new WinCondition(this.field);
  }

  /* Creating a 3 by 3 square, anything beyond and anything less than 0 is out of bounds */
  isOutOfBounds(coords) {
    if (
      !coords ||
      typeof coords.row !== "number" ||
      typeof coords.column !== "number"
    )
      return true;
    return (
      coords.row > 3 || coords.row < 0 || coords.column > 3 || coords.column < 0
    );
  }

  isTurnOf(symbol) {
    return this.turnOf === symbol;
  }
}
