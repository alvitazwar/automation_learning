const { ifError, strict } = require("assert");
const { assert } = require("console");
var Factory = require('rosie').Factory;
var faker = require('faker');
const helpers = require('./pages/helpers');


Feature('advance ');


Scenario('check Existing Balance', async({ I }) => {
    I.loginAsVendor();
    //Check Existing Knowledge
    helpers.checkExistingBalance();

});
Scenario('New order', async({ I }) => {
    I.loginAsCustomer();
    I.amOnPage('/shop');
    I.click('simple_pro_1');
    //Place A new Order
    helpers.placeOrder();
});
Scenario('update order', async({ I }) => {
    I.loginAsVendor();
    //Change Order Status
    helpers.updateOrderStatus();
    //Grab Current earnings
    await helpers.grabCurrentEarnings();
    //start calculation matching
    await helpers.balanceAssertEqual();

});