'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Helper = require('@codeceptjs/helper');

var puppeteer = require('puppeteer');

var MyHelper =
/*#__PURE__*/
function (_Helper) {
  _inherits(MyHelper, _Helper);

  function MyHelper() {
    _classCallCheck(this, MyHelper);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyHelper).apply(this, arguments));
  }

  _createClass(MyHelper, [{
    key: "demoFunction",
    value: function demoFunction(selector) {
      var helper,
          txtFrom,
          _len,
          options,
          _key,
          _args = arguments;

      return regeneratorRuntime.async(function demoFunction$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              helper = this.helpers['Puppeteer'];
              _context.next = 3;
              return regeneratorRuntime.awrap(helper.selector);

            case 3:
              txtFrom = _context.sent;
              _context.prev = 4;

              if (!(txtFrom == '//*[@id="isAgeSelected"]')) {
                _context.next = 10;
                break;
              }

              for (_len = _args.length, options = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                options[_key - 1] = _args[_key];
              }

              return _context.abrupt("return", helper.click.apply(helper, [selector].concat(options)));

            case 10:
              console.log("Else executed");

            case 11:
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](4);
              console.error("ALvi Tazwar", _context.t0);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[4, 13]]);
    }
  }]);

  return MyHelper;
}(Helper);

module.exports = MyHelper; // clickIfVisible
// try {
//   const numVisible = await helper.grabNumberOfVisibleElements(selector);
//   if (numVisible) {
//       return helper.click(selector, ...options);
//   }
// } catch (err) {
//   console.log('Skipping operation as element is not visible');
// }