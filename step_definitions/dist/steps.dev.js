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
});