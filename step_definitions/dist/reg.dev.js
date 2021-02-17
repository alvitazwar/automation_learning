"use strict";

var Factory = require('rosie').Factory;

var faker = require('faker');

var helpers = require('../pages/helpers');

var _inject = inject(),
    I = _inject.I;

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