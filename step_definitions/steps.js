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

Given(/I have product with \$(\d+) price/, (price) => {
    I.clearCookie();
    I.loginAsCustomer();
    I.amOnPage('/shop');
    I.click('simple_pro_1');
    I.click('Add to cart');
    I.click('div.woocommerce-notices-wrapper > div > a');

});
When('I go to checkout process', () => {
    I.click('div.cart-collaterals > div > div > a');
});
Then(/my order amount is \$(\d+) and it is final amount/, (total) => {
    I.see(total, ' tfoot > tr.order-total > td > strong > span > bdi');
});

//Purchase Calculation Business Scenario
Given('Vendor balance existing balance will be checked', () => {
    I.loginAsVendor();
    helpers.checkExistingBalance();
    helpers.vendorlogout();

});
When('Customer purchase a simple product', () => {
    I.loginAsCustomer();
    I.amOnPage('/shop');
    I.click('simple_pro_1');
    //Place A new Order
    helpers.placeOrder();
    helpers.customerlogout();
});
Then('Vendor approve order status to comeplete', () => {
    I.loginAsVendor();
    //Change Order Status
    helpers.updateOrderStatus();

});
Then('Vendor balance will update with addition of new order earning amount', async() => {
    await helpers.grabCurrentEarnings();
    //start calculation matching
    await helpers.balanceAssertEqual();
});