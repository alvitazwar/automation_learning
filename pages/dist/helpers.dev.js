"use strict";

var _require = require("assert"),
    ifError = _require.ifError,
    strict = _require.strict;

var _require2 = require("console"),
    assert = _require2.assert;

var Factory = require('rosie').Factory;

var faker = require('faker');

var locator = require('./register_locator');

var existing_balance;
var current_earnings;
var current_balance;
var actual_balance;

var _inject = inject(),
    I = _inject.I;

module.exports = {
  pageStatus: function pageStatus() {
    I.amOnPage('http://dokan-pro.test/');
    I.click('Login / Register');
    I.seeElement(locator.RegisterLocator);
  },
  registerSuccess: function registerSuccess() {
    I.fillField(locator.EmailAdressLocator, locator.EmailAddress);
    I.fillField(locator.PasswordInput, locator.PasswordValue);
    I.checkOption('I am a vendor');
    I.fillField('First Name', locator.FirstName);
    I.fillField('Last Name', locator.Lastname);
    I.fillField('Shop Name', locator.Shopname);
    I.scrollTo(locator.PhoneNumberInput);
    I.click(locator.PhoneNumberInput);
    I.fillField(locator.PhoneNumberInput, locator.PhoneNumberValue);
    I.click('Register'); //I.see('Welcome to the Marketplace!');

    I.click('Not right now');
    I.seeInCurrentUrl('/dashboard');
  },
  checkVendor: function checkVendor() {
    I.amOnPage('/dashboard');
    I.moveCursorTo(locator.MenuHoverDropdown);
    I.click(locator.MyAccount);
    I.click(locator.EditAccount);
    I.seeInField('Email address', locator.EmailAddress);
  },
  loginAsVendor: function loginAsVendor() {
    I.fillField('Username or email address ', 'alvitazwar@wedevs.com');
    I.fillField('Password', 'alvitazwar1122334456');
    I.click('Login');
    I.seeInCurrentUrl('/dashboard');
  },
  checkExistingBalance: function checkExistingBalance() {
    var bal;
    return regeneratorRuntime.async(function checkExistingBalance$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            I.amOnPage('/dashboard/withdraw');
            _context.next = 3;
            return regeneratorRuntime.awrap(I.grabTextFrom(locator.VendorBalance));

          case 3:
            bal = _context.sent;
            existing_balance = parseInt(bal.replace(/[, ৳]+/g, ""));
            console.log('Existing Balance:', existing_balance);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  placeOrder: function placeOrder() {
    I.click('Add to cart');
    I.click('div.woocommerce-notices-wrapper > div > a'); //View Cart

    I.click('div.cart-collaterals > div > div > a'); // Proceed To checkout

    I.seeInCurrentUrl('/checkout');
    I.fillField(locator.BillingFirstName, locator.FirstName);
    I.fillField(locator.BillingLastName, locator.Lastname);
    I.fillField(locator.BillingCompanyName, faker.company.companyName());
    I.fillField(locator.BillingAddress, faker.address.streetAddress());
    I.fillField(locator.BillingCity, faker.address.city());
    I.fillField(locator.BillingPhone, faker.phone.phoneNumberFormat());
    I.fillField(locator.BillingEmail, locator.EmailAddress);
    I.checkOption('Direct bank transfer'); // This will be Replaced Soon.

    I.click(locator.PlaceOrderBtn);
    I.waitForText(locator.OrderSuccessMsg, 30, '.woocommerce-order');
  },
  updateOrderStatus: function updateOrderStatus() {
    I.amOnPage('/dashboard/orders');
    I.click(locator.FirstOrderRow); // I.wait(5);

    I.click(locator.EditStatusLink);
    I.selectOption('#order_status', 'Completed');
    I.click('Update'); // I.wait('5');
    // I.waitForElement(locator.GeneralDetails, 30);

    I.see('Completed');
  },
  grabCurrentEarnings: function grabCurrentEarnings() {
    var earning;
    return regeneratorRuntime.async(function grabCurrentEarnings$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            I.amOnPage('/dashboard/orders'); //I.click('Orders');

            _context2.next = 3;
            return regeneratorRuntime.awrap(I.grabTextFrom('.dokan-order-earning > .amount.woocommerce-Price-amount'));

          case 3:
            earning = _context2.sent;
            current_earnings = parseInt(earning.replace(/[, ৳]+/g, ""));
            console.log('Current Earning ', current_earnings);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  balanceAssertEqual: function balanceAssertEqual() {
    var up_bal;
    return regeneratorRuntime.async(function balanceAssertEqual$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // this.grabCurrentEarnings();
            I.amOnPage('/dashboard/withdraw');
            current_balance = existing_balance + current_earnings;
            console.log('Current balance', current_balance);
            _context3.next = 5;
            return regeneratorRuntime.awrap(I.grabTextFrom(locator.VendorBalance));

          case 5:
            up_bal = _context3.sent;
            actual_balance = parseInt(up_bal.replace(/[, ৳]+/g, ""));
            strict.equal(current_balance, actual_balance);
            I.say('Calculation matched');
            console.log('Existing Balance', existing_balance, '+', 'Current Earning', current_earnings, '=', 'Actual Balance', existing_balance + current_earnings);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  vendorlogout: function vendorlogout() {
    I.moveCursorTo(locator.VendorMoveCursor);
    I.click(locator.VendorLogout);
  },
  customerlogout: function customerlogout() {
    I.moveCursorTo(locator.CustomerMoveCursor);
    I.click('Log out');
  }
};