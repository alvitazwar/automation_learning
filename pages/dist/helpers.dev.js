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
var admin_existing_balance;
var admin_current_commission;
var admin_current_balance;
var admin_actual_balance;

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
    I.click(locator.ViewCart); //View Cart

    I.click(locator.ProceedCheckout); // Proceed To checkout

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
            return regeneratorRuntime.awrap(I.grabTextFrom(locator.CurrentEarning));

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
  adminBalanceCheck: function adminBalanceCheck() {
    var ad_bal;
    return regeneratorRuntime.async(function adminBalanceCheck$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            I.amOnPage('/wp-admin/admin.php?page=dokan#/reports');
            I.scrollTo(locator.AdminBalance);
            _context4.next = 4;
            return regeneratorRuntime.awrap(I.grabTextFrom(locator.AdminBalance));

          case 4:
            ad_bal = _context4.sent;
            admin_existing_balance = parseInt(ad_bal.replace('৳', "").replace('$', "").trim());
            console.log('Admin Existing Balance:', admin_existing_balance);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    });
  },
  getAdminComission: function getAdminComission() {
    var ad_com;
    return regeneratorRuntime.async(function getAdminComission$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            I.amOnPage('/wp-admin/admin.php?page=dokan#/reports?tab=logs');
            _context5.next = 3;
            return regeneratorRuntime.awrap(I.grabTextFrom(locator.AdminComission));

          case 3:
            ad_com = _context5.sent;
            admin_current_commission = parseInt(ad_com.replace('৳', "").replace('$', "").trim());
            console.log('Admin Current Commission:', admin_current_commission);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    });
  },
  checkAdminCalculation: function checkAdminCalculation() {
    var ad_actual_bal;
    return regeneratorRuntime.async(function checkAdminCalculation$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            I.amOnPage('/wp-admin/admin.php?page=dokan#/reports');
            I.scrollTo(locator.AdminBalance);
            admin_current_balance = admin_existing_balance + admin_current_commission;
            console.log('Admin Current Balance:', admin_current_balance);
            _context6.next = 6;
            return regeneratorRuntime.awrap(I.grabTextFrom(locator.AdminBalance));

          case 6:
            ad_actual_bal = _context6.sent;
            admin_actual_balance = parseInt(ad_actual_bal.replace('৳', "").replace('$', "").trim());
            strict.equal(admin_current_balance, admin_actual_balance);
            console.log('Admin Existing Balance', admin_existing_balance, '+', 'Current Comission', admin_current_commission, '=', 'Admin Actual Balance', admin_existing_balance + admin_current_commission);
            I.say('Calculation matched');

          case 11:
          case "end":
            return _context6.stop();
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
  },
  adminlogout: function adminlogout() {
    I.moveCursorTo(locator.AdminMoveCursor);
    I.wait(1);
    I.click(locator.AdminLogout);
  }
};