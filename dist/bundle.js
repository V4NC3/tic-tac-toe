(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundPane = undefined;

var _simpleComponent = require("../libs/simple-component");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* Semi-transparent back-pane to let the client knows who's turn */
var BackgroundPane = exports.BackgroundPane = function (_SimpleComponent) {
  _inherits(BackgroundPane, _SimpleComponent);

  function BackgroundPane() {
    _classCallCheck(this, BackgroundPane);

    var _this = _possibleConstructorReturn(this, (BackgroundPane.__proto__ || Object.getPrototypeOf(BackgroundPane)).call(this, "background-pane"));

    _this.element.setAttribute("style", "position: absolute; top: 0; height: 100%; width: 100%;" + "background-color: black; opacity: .5; z-index: 10");
    return _this;
  }

  return BackgroundPane;
}(_simpleComponent.SimpleComponent);

},{"../libs/simple-component":13}],2:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrentTurn = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }return value;
};

var _writableComponent = require("../libs/writable-component");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* Writing the Current player turn -  holds the current turn number */
var CurrentTurn = exports.CurrentTurn = function (_WritableComponent) {
  _inherits(CurrentTurn, _WritableComponent);

  function CurrentTurn() {
    _classCallCheck(this, CurrentTurn);

    var _this = _possibleConstructorReturn(this, (CurrentTurn.__proto__ || Object.getPrototypeOf(CurrentTurn)).call(this, "current-turn"));

    _this.element.setAttribute("style", "float: left");
    return _this;
  }

  _createClass(CurrentTurn, [{
    key: "textContent",
    set: function set(v) {
      _set(CurrentTurn.prototype.__proto__ || Object.getPrototypeOf(CurrentTurn.prototype), "textContent", "turn No: " + v, this);
    }
  }]);

  return CurrentTurn;
}(_writableComponent.WritableComponent);

},{"../libs/writable-component":15}],3:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameField = undefined;

var _listComponent = require("../libs/list-component");

var _gameRow = require("./game-row");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* GameField is responsible for creating the actual elements. It iterates over the field from GameEngine, creating a row via GameRow and column via GameSlot */

var GameField = exports.GameField = function (_ListComponent) {
  _inherits(GameField, _ListComponent);

  function GameField(field) {
    _classCallCheck(this, GameField);

    var _this = _possibleConstructorReturn(this, (GameField.__proto__ || Object.getPrototypeOf(GameField)).call(this, "game-field"));

    var gameRow = void 0;
    _this.items = [];
    _this.element.setAttribute("style", "font-family: Monospace; text-align: center");

    field.forEach(function (row) {
      gameRow = new _gameRow.GameRow(row);
      _this.element.appendChild(gameRow.element);
      _this.items.push(gameRow);
    });
    return _this;
  }

  return GameField;
}(_listComponent.ListComponent);

},{"../libs/list-component":11,"./game-row":4}],4:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameRow = undefined;

var _listComponent = require("../libs/list-component");

var _gameSlot = require("./game-slot");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* GameRow iterates the rows to create the respective GameSlot */
var GameRow = exports.GameRow = function (_ListComponent) {
  _inherits(GameRow, _ListComponent);

  /* init the Array of slots */
  function GameRow(row) {
    _classCallCheck(this, GameRow);

    var _this = _possibleConstructorReturn(this, (GameRow.__proto__ || Object.getPrototypeOf(GameRow)).call(this, "game-row"));

    var gameSlot = void 0;
    _this.items = [];
    _this.element.setAttribute("style", "display: block;");

    row.forEach(function (slot) {
      gameSlot = new _gameSlot.GameSlot(slot);
      _this.element.appendChild(gameSlot.element);
      _this.items.push(gameSlot);
    });
    return _this;
  }

  return GameRow;
}(_listComponent.ListComponent);

},{"../libs/list-component":11,"./game-slot":5}],5:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameSlot = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }return value;
};

var _writableComponent = require("../libs/writable-component");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* GameSlot Class that's maintaining the visual correlation between the GameEngine */
var GameSlot = exports.GameSlot = function (_WritableComponent) {
  _inherits(GameSlot, _WritableComponent);

  /* Class takes slot as an argument */
  function GameSlot(slot) {
    _classCallCheck(this, GameSlot);

    /* Style element after calling the Super Class. Calling all the browser functionalities */
    var _this = _possibleConstructorReturn(this, (GameSlot.__proto__ || Object.getPrototypeOf(GameSlot)).call(this, "game-slot"));

    _this.element.setAttribute("style", "height: 60px; width: 60px; background-color: grey; display: inline-block; " + "border: 1px solid black; margin: 5px; font-size: large; color: black; line-height: 60px;" + "text-align: center; cursor: pointer");

    _this.element.setAttribute("slot-row", slot.row);
    _this.element.setAttribute("slot-column", slot.column);
    _this.element.textContent = "-";
    return _this;
  }

  /* Overwriting the base Class because we want to do more than just setting the value */

  _createClass(GameSlot, [{
    key: "textContent",
    set: function set(slot) {
      _set(GameSlot.prototype.__proto__ || Object.getPrototypeOf(GameSlot.prototype), "textContent", slot.symbol, this);
      this.element.style.backgroundColor = "white";
    }
  }]);

  return GameSlot;
}(_writableComponent.WritableComponent);

},{"../libs/writable-component":15}],6:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notice = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _simpleComponent = require("../libs/simple-component");

var _backgroundPage = require("./background-page");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* Notice Component - show the user any special message and will auto-delete after X seconds */
var Notice = exports.Notice = function (_SimpleComponent) {
  _inherits(Notice, _SimpleComponent);

  function Notice(text) {
    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

    _classCallCheck(this, Notice);

    /* Checking for existing notice and deleting it */
    var _this = _possibleConstructorReturn(this, (Notice.__proto__ || Object.getPrototypeOf(Notice)).call(this, "notice"));

    var element = document.querySelector(_this.selector);
    if (element) _this.removeElements();

    _this.element.setAttribute("style", "position: absolute; top: 20%; background-color: white; z-index: 11;" + "text-align: center; front-family: Monospace; font-size: 25px; width 100%;");
    _this.element.textContext = text;
    _this.BackgroundPane = new _backgroundPage.BackgroundPane();

    document.body.appendChild(_this.BackgroundPane.element);
    document.body.appendChild(_this.element);

    setTimeout(function () {
      return _this.removeElements();
    }, interval);
    return _this;
  }

  _createClass(Notice, [{
    key: "removeElements",
    value: function removeElements() {
      this.BackgroundPane.destroy();
      this.destroy();
    }
  }]);

  return Notice;
}(_simpleComponent.SimpleComponent);

},{"../libs/simple-component":13,"./background-page":1}],7:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaySymbol = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }return value;
};

var _writableComponent = require("../libs/writable-component");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* Shows the Symbol that's in play */
var PlaySymbol = exports.PlaySymbol = function (_WritableComponent) {
  _inherits(PlaySymbol, _WritableComponent);

  function PlaySymbol() {
    _classCallCheck(this, PlaySymbol);

    var _this = _possibleConstructorReturn(this, (PlaySymbol.__proto__ || Object.getPrototypeOf(PlaySymbol)).call(this, "symbol"));

    _this.element.setAttribute("style", "float: right");
    return _this;
  }

  _createClass(PlaySymbol, [{
    key: "textContent",
    set: function set(v) {
      _set(PlaySymbol.prototype.__proto__ || Object.getPrototypeOf(PlaySymbol.prototype), "textContent", "playing: " + v, this);
    }
  }]);

  return PlaySymbol;
}(_writableComponent.WritableComponent);

},{"../libs/writable-component":15}],8:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TurnInformation = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _simpleComponent = require("../libs/simple-component");

var _playSymbol = require("./play-symbol");

var _currentTurn = require("./current-turn");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* Wraps CurrentTurn and Symbol into a whole Component */
var TurnInformation = exports.TurnInformation = function (_SimpleComponent) {
  _inherits(TurnInformation, _SimpleComponent);

  function TurnInformation() {
    _classCallCheck(this, TurnInformation);

    var _this = _possibleConstructorReturn(this, (TurnInformation.__proto__ || Object.getPrototypeOf(TurnInformation)).call(this, "turn-information"));

    _this.currentTurn = new _currentTurn.CurrentTurn();
    _this.symbol = new _playSymbol.PlaySymbol();
    _this.element.setAttribute("style", "text-transform: uppercase; font-size: 30px; height: 40px; display: block; font-family: Monospace");

    _this.element.appendChild(_this.currentTurn.element);
    _this.element.appendChild(_this.symbol.element);
    return _this;
  }

  /* updates both components */

  _createClass(TurnInformation, [{
    key: "update",
    value: function update(turn, symbol) {
      this.currentTurn.textContent = turn || 0;
      this.symbol.textContent = symbol || "";
    }
  }]);

  return TurnInformation;
}(_simpleComponent.SimpleComponent);

},{"../libs/simple-component":13,"./current-turn":2,"./play-symbol":7}],9:[function(require,module,exports){
"use strict";

var _gameHud = require("./modules/game-hud");

document.addEventListener("DOMContentLoaded", function () {
  return new _gameHud.GameHud();
});

},{"./modules/game-hud":16}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameEngine = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _winConditions = require("./win-conditions");

var _map = require("./map");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/* GameEngine Class to manage turns, field occupation, if have symbols won, and line made */
var GameEngine = exports.GameEngine = function () {
  function GameEngine(symbols, lastWinner) {
    _classCallCheck(this, GameEngine);

    if (!symbols || symbols.length !== 2) throw Error("A game must be made of two symbols");
    this.turnOf = lastWinner ? lastWinner : Math.round(Math.random()) === 0 ? symbols[0] : symbols[1];
    this.symbols = symbols;
    this.field = (0, _map.createSquare)(3);
    this.winCondition = new _winConditions.WinCondition(this.field);
  }

  /* Creating a 3 by 3 square, anything beyond and anything less than 0 is out of bounds */

  _createClass(GameEngine, [{
    key: "isOutOfBounds",
    value: function isOutOfBounds(coords) {
      if (!coords || typeof coords.row !== "number" || typeof coords.column !== "number") return true;
      return coords.row > 3 || coords.row < 0 || coords.column > 3 || coords.column < 0;
    }
  }, {
    key: "isTurnOf",
    value: function isTurnOf(symbol) {
      return this.turnOf === symbol;
    }
  }, {
    key: "toggleTurn",
    value: function toggleTurn() {
      return this.turnOf = this.turnOf === this.symbols[0] ? this.symbols[1] : this.symbols[0];
    }

    /* Update the slot state to occupied with symbols matching */

  }, {
    key: "occupyField",
    value: function occupyField(coords) {
      if (this.isOutOfBounds(coords)) return false;

      var slot = this.field[coords.row][coords.column];
      if (slot.occupied) return false;

      slot.occupied = true;
      slot.symbol = this.turnOf;
      return slot;
    }

    /* Simple alias to call winCondition.hasLine with the provided symbol */

  }, {
    key: "isWinner",
    get: function get() {
      return this.winCondition.hasLine(this.turnOf);
    }
  }, {
    key: "isTie",
    get: function get() {
      return this.winCondition.tieExists;
    }
  }]);

  return GameEngine;
}();

},{"./map":12,"./win-conditions":14}],11:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListComponent = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _simpleComponent = require("./simple-component");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* List Component to house other components that will be used to pass 'items' so that the 'getItem' statement can retrieve it */
var ListComponent = exports.ListComponent = function (_SimpleComponent) {
  _inherits(ListComponent, _SimpleComponent);

  function ListComponent(selector) {
    _classCallCheck(this, ListComponent);

    var _this = _possibleConstructorReturn(this, (ListComponent.__proto__ || Object.getPrototypeOf(ListComponent)).call(this, selector));

    _this.items = [];
    return _this;
  }

  _createClass(ListComponent, [{
    key: "getItem",
    value: function getItem(index) {
      if (typeof index !== "number") throw Error("getRow must have a number as an argument");
      if (index < 0 || index > this.items.length) throw Error("Out of Bounds");
      return this.items[index];
    }
  }]);

  return ListComponent;
}(_simpleComponent.SimpleComponent);

},{"./simple-component":13}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSquare = createSquare;
/* Create a representation of a square grid using Arrays that will match to our "game map" */
function createSquare(height) {
  var rows = height || 3; /* use the provided argument or default to size 3x3 */
  var columns = height || 3;
  var field = [];
  for (var x = 0; x < rows; x++) {
    var row = [];
    for (var y = 0; y < columns; y++) {
      /* we set the row/column information inside the slot so we can return an array of slots on win conditions that way we won't to make any special changes to the slot object in the future. */
      var slot = { occupied: false, symbol: "", row: x, column: y };
      row.push(slot);
    }
    field.push(row);
  }
  return field;
}

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var SimpleComponent = exports.SimpleComponent = function () {
  /* This class generates a element property containing a NodeElement to be appended into the DOM. This class should be the base of every other component we will create and therefore should also contain its removal from DOM. @param selector {String} the selector of the element to be created. */

  function SimpleComponent(selector) {
    _classCallCheck(this, SimpleComponent);

    if (!selector) throw Error("a SimpleComponent must be composed of a selector");
    this.selector = selector.toString();
    this.element = document.createElement(this.selector);
  }

  /* Call this when you want to remove the element from the DOM*/

  _createClass(SimpleComponent, [{
    key: "destroy",
    value: function destroy() {
      document.body.removeChild(this.element);
    }
  }]);

  return SimpleComponent;
}();

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WinCondition = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _map = require("./map");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/* Defining the winning condition */
var WinCondition = exports.WinCondition = function () {
  function WinCondition() {
    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _map.createSquare)(3);

    _classCallCheck(this, WinCondition);

    this.field = field;
  }

  /* Horizontal row and check if all of the columns are occupied with the same symbol. If every column on one row is of the provided symbol, it will return true and we then return the inspectingRow with all the information necessary to the HUD
   */

  _createClass(WinCondition, [{
    key: "horizontalLine",
    value: function horizontalLine(symbol) {
      var inspectingRow = [];
      return this.field.some(function (row) {
        inspectingRow = row;
        return row.every(function (slot) {
          return slot.occupied && slot.symbol == symbol;
        });
      }) && inspectingRow;
    }

    /* Vertical column aggregates that checks each row, then checks if every element inside passes a condition */

  }, {
    key: "verticalLine",
    value: function verticalLine(symbol) {
      var _this = this;

      return this.field.some(function (row, index) {
        var inspectingColumn = [];
        for (var x = _this.field.length - 1; x > -1; x--) {
          inspectingColumn.push(_this.field[x][index]);
        }
        return inspectingColumn.every(function (slot) {
          return slot.occupied && slot.symbol == symbol;
        }) && inspectingColumn;
      });
    }

    /* Diagonal line, checking if the center field is being used or empty */

  }, {
    key: "diagonalLine",
    value: function diagonalLine(symbol) {
      var length = this.field.length - 1;
      var middle = length / 2;

      /* Checking if the middle and one of the corners are unoccupid, if true then there isnt a winner at this time which will return false */
      if (!this.field[middle][middle].occupied && (!this.field[length][0].occupied || !this.field[0][0].occupied)) return false;

      /* Checking which column is occupied and which symbol */
      var column = this.field[0][0].occupied && this.field[0][0].symbol === symbol ? 0 : this.field[0][length].occupied && this.field[0][length].symbol === symbol ? length : false;

      /* Checking the assigned number in the column to see if the corners are occupied */
      if (typeof column !== "number") return false;

      /* Looping through the diagonal line, checking for diagonal it is (last or first) to increment or decrement for condition which is responsible to push the slots to the temporary array */
      var inspectingDiagonal = [];
      var row = 0;
      if (column === 0) {
        for (column; column <= length; column++) {
          inspectingDiagonal.push(this.field[row][column]);
          row++;
        }
      } else {
        for (column; column >= 0; column--) {
          inspectingDiagonal.push(this.field[row][column]);
          row++;
        }
      }
      /* If the items in the temp array is true, then there is a diagonal winner */
      return inspectingDiagonal.every(function (slot) {
        return slot.occupied && slot.symbol == symbol;
      }) && inspectingDiagonal;
    }

    /* Tied Game */

  }, {
    key: "hasLine",

    /* Created an alias for easy usage */
    value: function hasLine(symbol) {
      return this.horizontalLine(symbol) || this.verticalLine(symbol) || this.diagonalLine(symbol);
    }
  }, {
    key: "tieExists",
    get: function get() {
      var flatten = function flatten(arr) {
        return arr.reduce(function (a, b) {
          return a.concat(Array.isArray(b) ? flatten(b) : b);
        }, []);
      };
      var flattenedField = flatten(this.field);
      return flattenedField.every(function (slot) {
        return slot.occupied === true;
      });
    }
  }]);

  return WinCondition;
}();

},{"./map":12}],15:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WritableComponent = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _simpleComponent = require("./simple-component");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/* A writable class holds an alias property to change the elements' textContent and extends SimpleComponent */
var WritableComponent = exports.WritableComponent = function (_SimpleComponent) {
  _inherits(WritableComponent, _SimpleComponent);

  function WritableComponent(selector) {
    _classCallCheck(this, WritableComponent);

    return _possibleConstructorReturn(this, (WritableComponent.__proto__ || Object.getPrototypeOf(WritableComponent)).call(this, selector));
  }

  /* Get proprety function */

  _createClass(WritableComponent, [{
    key: "textContent",
    get: function get() {
      return this.element.textContent;
    }

    /* Setter proprety function; v = 'some value' */

    , set: function set(v) {
      return this.element.textContent = v;
    }
  }]);

  return WritableComponent;
}(_simpleComponent.SimpleComponent);

},{"./simple-component":13}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameHud = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _gameEngine = require("../libs/game-engine");

var _gameField = require("../components/game-field");

var _notice = require("../components/notice");

var _turnInformation = require("../components/turn-information");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/* GameHud Class brings all the Components together into the DOM and the hub between the user interface and the Game Engine */
var GameHud = exports.GameHud = function () {
  function GameHud() {
    _classCallCheck(this, GameHud);

    this.turns = null;
    this.gameEngine = null;
    this.gameField = null;
    this.turnInfo = new _turnInformation.TurnInformation();

    document.body.appendChild(this.turnInfo.element);
    this.createGameField(false);
  }

  _createClass(GameHud, [{
    key: "createGameField",
    value: function createGameField() {
      var _this = this;

      var lastWinner = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "x";

      this.turns = 0;
      this.gameEngine = new _gameEngine.GameEngine(["x", "o"], lastWinner);

      /* If GameField component exists in the page, remove that child from the body so we can insert a new/clean one */
      var oldGameField = document.querySelector("game-field");
      if (oldGameField) document.body.removeChild(oldGameField);

      /* New GameField component */
      this.gameField = new _gameField.GameField(this.gameEngine.field);

      /* Click events to the GameSlot */
      this.gameField.items.forEach(function (row) {
        row.items.forEach(function (slot) {
          slot.element.addEventListener("click", function (element) {
            return _this.occupyField(element);
          });
        });
      });

      /* Append the GameField element to the body of the page */
      document.body.appendChild(this.gameField.element);

      /* Show Notice to user and update the turn info via TurnInfo */
      new _notice.Notice("Game Start! First to Play: " + this.gameEngine.turnOf, 3000);
      this.turnInfo.update(this.turns, this.gameEngine.turnOf);
    }
  }, {
    key: "processGameEnd",

    /* Show GameEnd notice and restart game */
    value: function processGameEnd() {
      var _this2 = this;

      var winner = false;
      if (this.gameEngine.isWinner) {
        new _notice.Notice("Game End! Winner is " + this.gameEngine.turnOf + "! Game took " + this.turns + " turns", 1500);
        winner = this.gameEngine.turnOf;
      } else if (this.gameEngine.isTie) {
        new _notice.Notice("Game End! It's a Tie! Game took " + this.turns + " turns", 1500);
      }

      setTimeout(function () {
        _this2.createGameField(winner);
      }, 1500);
    }

    /* Occupying the fields */

  }, {
    key: "occupyField",
    value: function occupyField(element) {
      var coords = {
        row: parseInt(element.target.getAttribute("slot-row"), 10),
        column: parseInt(element.target.getAttribute("slot-column"), 10)
      };

      var turnAction = this.gameEngine.occupyField(coords);
      if (!turnAction) {
        new _notice.Notice("This field is already occupied");
        return;
      }

      this.turns++;

      if (this.isGameEnd) {
        this.processGameEnd();
      } else {
        this.gameEngine.toggleTurn();
        this.turnInfo.update(this.turns, this.gameEngine.turnOf);
      }

      this.gameField.getItem(turnAction.row).getItem(turnAction.column).textContent = turnAction;
    }
  }, {
    key: "isGameEnd",
    get: function get() {
      return this.gameEngine.isWinner || this.gameEngine.isTie;
    }
  }]);

  return GameHud;
}();

},{"../components/game-field":3,"../components/notice":6,"../components/turn-information":8,"../libs/game-engine":10}]},{},[9]);
