"use strict";

var Factory = require('rosie').Factory;

var faker = require('faker');

var helpers = require('../pages/helpers');

var _inject = inject(),
    I = _inject.I; // Add in your custom step files


Given('I have a Register Form', function () {
  // TODO: replace with your own step
  helpers.pageStatus();
});
When('I Register a new user as vendor and logged in', function () {
  helpers.registerSuccess(); //helpers.loginAsVendor();
});
Then('I should check email as user email', function () {
  helpers.checkVendor();
});
Given(/I have product with \$(\d+) price/, function (price) {
  I.clearCookie();
  I.loginAsCustomer();
  I.amOnPage('/shop');
  I.click('simple_pro_1');
  I.click('Add to cart');
  I.click('div.woocommerce-notices-wrapper > div > a');
});
When('I go to checkout process', function () {
  I.click('div.cart-collaterals > div > div > a');
});
Then(/my order amount is \$(\d+) and it is final amount/, function (total) {
  I.see(total, ' tfoot > tr.order-total > td > strong > span > bdi');
}); //Purchase Calculation Business Scenario

Given('Vendor balance existing balance will be checked', function () {
  I.loginAsVendor();
  helpers.checkExistingBalance();
  helpers.vendorlogout();
});
When('Customer purchase a simple product', function () {
  I.loginAsCustomer();
  I.amOnPage('/shop');
  I.click('simple_pro_1'); //Place A new Order

  helpers.placeOrder();
  helpers.customerlogout();
});
Then('Vendor approve order status to comeplete', function () {
  I.loginAsVendor(); //Change Order Status

  helpers.updateOrderStatus();
});
Then('Vendor balance will update with addition of new order earning amount', function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(helpers.grabCurrentEarnings());

        case 2:
          _context.next = 4;
          return regeneratorRuntime.awrap(helpers.balanceAssertEqual());

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});