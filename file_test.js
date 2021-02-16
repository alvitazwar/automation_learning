const { ifError, strict } = require("assert");
const { assert } = require("console");
var Factory = require('rosie').Factory;
var faker = require('faker');
const helpers = require('./pages/helpers');
var admin_existing_balance;
var admin_current_commission;
var admin_current_balance;
var admin_actual_balance;

Feature('advance ');


// Scenario('check Existing Balance', async({ I }) => {
//     I.loginAsVendor();
//     //Check Existing Knowledge
//     helpers.checkExistingBalance();

// });
Scenario('New order', async({ I }) => {
    I.loginAsCustomer();
    I.amOnPage('/shop');
    I.click('simple_pro_1');
    //Place A new Order
    helpers.placeOrder();
});
Scenario('Get Existing balance of admin', async({ I }) => {
    I.loginAsAdmin();
    I.amOnPage('/wp-admin/admin.php?page=dokan#/reports');
    I.scrollTo(' div.inside > div > div > ul > li.commission > a > strong > div');
    let ad_bal = await I.grabTextFrom(' div.inside > div > div > ul > li.commission > a > strong > div');
    admin_existing_balance = parseInt(ad_bal.replace('৳', "").replace('$', "").trim());
    console.log('Admin Existing Balance:', admin_existing_balance);
    //GET COMMISSION OF ADMIN
    I.amOnPage('/wp-admin/admin.php?page=dokan#/reports?tab=logs');
    let ad_com = await I.grabTextFrom('tr:nth-child(1) > td.column.commission > div');
    admin_current_commission = parseInt(ad_com.replace('৳', "").replace('$', "").trim());
    console.log('Admin Current Commission:', admin_current_commission);
    //Admin balance Calculation
    I.amOnPage('/wp-admin/admin.php?page=dokan#/reports');
    I.scrollTo(' div.inside > div > div > ul > li.commission > a > strong > div');
    admin_current_balance = admin_existing_balance + admin_current_commission;
    console.log('Admin Current Balance:', admin_current_balance);
    let ad_actual_bal = await I.grabTextFrom('div.inside > div > div > ul > li.commission > a > strong > div');
    admin_actual_balance = parseInt(ad_actual_bal.replace('৳', "").replace('$', "").trim());
    console.log('Admin Actual Balance', admin_actual_balance);
    strict.equal(admin_current_balance, admin_actual_balance);
    I.say('Calculation matched');


});

// Scenario('Get Commission of admin', async({ I }) => {
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