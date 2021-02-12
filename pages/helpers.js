var Factory = require('rosie').Factory;
var faker = require('faker');
const locator = require('./register_locator');

const {
    I
} = inject();
module.exports = {

    pageStatus() {
        I.amOnPage('http://dokan-pro.test/');
        I.click('Login / Register');
        I.seeElement(locator.RegisterLocator);
    },
    registerSuccess() {

        I.fillField(locator.EmailAdressLocator, locator.EmailAddress);
        I.fillField(locator.PasswordInput, locator.PasswordValue);
        I.checkOption('I am a vendor');
        I.fillField('First Name', locator.FirstName);
        I.fillField('Last Name', locator.Lastname);
        I.fillField('Shop Name', locator.Shopname);
        I.scrollTo(locator.PhoneNumberInput);
        I.click(locator.PhoneNumberInput);
        I.fillField(locator.PhoneNumberInput, locator.PhoneNumberValue);
        I.click('Register');
        //I.see('Welcome to the Marketplace!');
        I.click('Not right now');
        I.seeInCurrentUrl('/dashboard');
    },
    checkVendor() {
        I.amOnPage('/dashboard');
        I.moveCursorTo(locator.MenuHoverDropdown);
        I.click(locator.MyAccount);
        I.click(locator.EditAccount);
        I.seeInField('Email address', locator.EmailAddress);



    },
    loginAsVendor() {
        I.fillField('Username or email address ', 'alvitazwar@wedevs.com');
        I.fillField('Password', 'alvitazwar1122334456');
        I.click('Login');
        I.seeInCurrentUrl('/dashboard');
    }

}