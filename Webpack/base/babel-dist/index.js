"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _context;

var Hello = /*#__PURE__*/function () {
  function Hello(name) {
    (0, _classCallCheck2.default)(this, Hello);
    this.name = name;
  }

  (0, _createClass2.default)(Hello, [{
    key: "hello",
    value: function hello() {
      console.log("hello ".concat(this.name));
    }
  }]);
  return Hello;
}();

var h = new Hello('world');
h.hello();

var add = function add(a, b) {
  return a + b;
};

var isHas = (0, _includes.default)(_context = [1, 2, 3]).call(_context, 2);