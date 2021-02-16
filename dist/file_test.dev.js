"use strict";

var _require = require("assert"),
    ifError = _require.ifError,
    strict = _require.strict;

var _require2 = require("console"),
    assert = _require2.assert;

var Factory = require('rosie').Factory;

var faker = require('faker');

var helpers = require('./pages/helpers');

Feature('advance ');
Scenario('check Existing Balance', function _callee(_ref) {
  var I;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          I.loginAsVendor(); //Check Existing Knowledge

          helpers.checkExistingBalance();

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
});
Scenario('New order', function _callee2(_ref2) {
  var I;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          I = _ref2.I;
          I.loginAsCustomer();
          I.amOnPage('/shop');
          I.click('simple_pro_1'); //Place A new Order

          helpers.placeOrder();

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
});
Scenario('update order', function _callee3(_ref3) {
  var I;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          I = _ref3.I;
          I.loginAsVendor(); //Change Order Status

          helpers.updateOrderStatus(); //Grab Current earnings

          _context3.next = 5;
          return regeneratorRuntime.awrap(helpers.grabCurrentEarnings());

        case 5:
          _context3.next = 7;
          return regeneratorRuntime.awrap(helpers.balanceAssertEqual());

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
});