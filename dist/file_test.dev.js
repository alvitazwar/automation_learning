"use strict";

var Helper = require('@codeceptjs/helper');

var puppeteer = require('puppeteer');

Feature('advance ');
Scenario('test something', function (_ref) {
  var I = _ref.I;
  I.amOnPage('https://www.seleniumeasy.com/test/basic-checkbox-demo.html');
  I.demoFunction('//*[@id="isAgeSelected"]');
});