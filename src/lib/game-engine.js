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
}
