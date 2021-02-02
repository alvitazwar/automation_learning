const Helper = require('@codeceptjs/helper');
const puppeteer = require('puppeteer');
Feature('advance ');

Scenario('test something', ({ I }) => {

    I.amOnPage('https://www.seleniumeasy.com/test/basic-checkbox-demo.html');
    I.demoFunction('//*[@id="isAgeSelected"]');
    // I.grabCssPropertyFrom()


});