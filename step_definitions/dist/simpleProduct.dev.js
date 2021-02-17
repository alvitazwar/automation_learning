"use strict";

var Factory = require('rosie').Factory;

var faker = require('faker');

var helpers = require('../pages/helpers');

var _inject = inject(),
    I = _inject.I;

Given('Existing balance of Admin will be checked', function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I.loginAsAdmin();
          _context.next = 3;
          return regeneratorRuntime.awrap(helpers.adminBalanceCheck());

        case 3:
          helpers.adminlogout();

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
When('Customer purchase a simple product', function () {
  I.loginAsCustomer();
  I.amOnPage('/shop');
  I.click('simple_pro_1'); //Place A new Order

  helpers.placeOrder();
  helpers.customerlogout();
});
Then('Admin balance and commission will be checked', function _callee2() {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          I.loginAsAdmin(); //Change Order Status

          _context2.next = 3;
          return regeneratorRuntime.awrap(helpers.getAdminComission());

        case 3:
          _context2.next = 5;
          return regeneratorRuntime.awrap(helpers.checkAdminCalculation());

        case 5:
          helpers.adminlogout();

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
});
Then('Vendors Existing Balance will be checked and approve order status to comeplete', function _callee3() {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          I.loginAsVendor(); //Check Vendors Existing Balance

          _context3.next = 3;
          return regeneratorRuntime.awrap(helpers.checkExistingBalance());

        case 3:
          //Change Order Status
          helpers.updateOrderStatus();

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
});
Then('Vendor balance will update with addition of new order earning amount', function _callee4() {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(helpers.grabCurrentEarnings());

        case 2:
          _context4.next = 4;
          return regeneratorRuntime.awrap(helpers.balanceAssertEqual());

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
});