"use strict";

var _require = require("assert"),
    ifError = _require.ifError,
    strict = _require.strict;

var _require2 = require("console"),
    assert = _require2.assert;

var Factory = require('rosie').Factory;

var faker = require('faker');

var helpers = require('./pages/helpers');

var admin_existing_balance;
var admin_current_commission;
var admin_current_balance;
var admin_actual_balance;
Feature('advance '); // Scenario('check Existing Balance', async({ I }) => {
//     I.loginAsVendor();
//     //Check Existing Knowledge
//     helpers.checkExistingBalance();
// });

Scenario('New order', function _callee(_ref) {
  var I;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          I = _ref.I;
          I.loginAsCustomer();
          I.amOnPage('/shop');
          I.click('simple_pro_1'); //Place A new Order

          helpers.placeOrder();

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
Scenario('Get Existing balance of admin', function _callee2(_ref2) {
  var I, ad_bal, ad_com, ad_actual_bal;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          I = _ref2.I;
          I.loginAsAdmin();
          I.amOnPage('/wp-admin/admin.php?page=dokan#/reports');
          I.scrollTo(' div.inside > div > div > ul > li.commission > a > strong > div');
          _context2.next = 6;
          return regeneratorRuntime.awrap(I.grabTextFrom(' div.inside > div > div > ul > li.commission > a > strong > div'));

        case 6:
          ad_bal = _context2.sent;
          admin_existing_balance = parseInt(ad_bal.replace('৳', "").replace('$', "").trim());
          console.log('Admin Existing Balance:', admin_existing_balance); //GET COMMISSION OF ADMIN

          I.amOnPage('/wp-admin/admin.php?page=dokan#/reports?tab=logs');
          _context2.next = 12;
          return regeneratorRuntime.awrap(I.grabTextFrom('tr:nth-child(1) > td.column.commission > div'));

        case 12:
          ad_com = _context2.sent;
          admin_current_commission = parseInt(ad_com.replace('৳', "").replace('$', "").trim());
          console.log('Admin Current Commission:', admin_current_commission); //Admin balance Calculation

          I.amOnPage('/wp-admin/admin.php?page=dokan#/reports');
          I.scrollTo(' div.inside > div > div > ul > li.commission > a > strong > div');
          admin_current_balance = admin_existing_balance + admin_current_commission;
          console.log('Admin Current Balance:', admin_current_balance);
          _context2.next = 21;
          return regeneratorRuntime.awrap(I.grabTextFrom('div.inside > div > div > ul > li.commission > a > strong > div'));

        case 21:
          ad_actual_bal = _context2.sent;
          admin_actual_balance = parseInt(ad_actual_bal.replace('৳', "").replace('$', "").trim());
          console.log('Admin Actual Balance', admin_actual_balance);
          strict.equal(admin_current_balance, admin_actual_balance);
          I.say('Calculation matched');

        case 26:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // Scenario('Get Commission of admin', async({ I }) => {
//     I.loginAsAdmin();
//     I.amOnPage('/wp-admin/admin.php?page=dokan#/reports?tab=logs');
//     let ad_com = await I.grabTextFrom('tr:nth-child(1) > td.column.commission > div');
//     admin_current_commission = parseInt(ad_com.replace('৳', "").replace('$', "").trim());
//     console.log('Admin Current Commission:', admin_current_commission);
// });
// Scenario('Admin calculation', async({ I }) => {
//     I.loginAsAdmin();
//     I.amOnPage('/wp-admin/admin.php?page=dokan#/reports');
//     I.scrollTo(' div.inside > div > div > ul > li.commission > a > strong > div');
//     admin_current_balance = admin_existing_balance + admin_current_commission;
//     console.log('Admin Current Balance:', admin_current_balance);
//     let ad_actual_bal = await I.grabTextFrom('tr:nth-child(1) > td.column.commission > div');
//     admin_actual_balance = parseInt(ad_actual_bal.replace('৳', "").replace('$', "").trim());
//     console.log('Admin Actual Balance', admin_actual_balance);
// });