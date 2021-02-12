var Factory = require('rosie').Factory;
var faker = require('faker');
const helpers = require('../pages/helpers');
const { I } = inject();
// Add in your custom step files

Given('I have a Register Form', () => {
    // TODO: replace with your own step
    helpers.pageStatus();
});
When('I Register a new user as vendor and logged in', () => {
    helpers.registerSuccess();
    //helpers.loginAsVendor();
});
Then('I should check email as user email', () => {
    helpers.checkVendor();
});