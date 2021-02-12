var Factory = require('rosie').Factory;
var faker = require('faker');
const { I } = inject();

module.exports = {
    // Locators for  Registration page
    // Start
    RegisterLocator: 'div.grid-50.tablet-grid-50.reg-form > h2',
    EmailAddress: faker.internet.email(),
    EmailAdressLocator: 'Email address',
    PasswordInput: '#reg_password',
    PasswordValue: 'alvitazwar@54321',
    FirstName: faker.name.firstName(),
    Lastname: faker.name.lastName(),
    Shopname: faker.name.title(),
    PhoneNumberInput: '#shop-phone',
    PhoneNumberValue: faker.phone.phoneNumber(),
    MenuHoverDropdown: '.nav.navbar-nav.nav .dokani-menu-user.dropdown-toggle',
    MyAccount: 'li:nth-of-type(3) > .dropdown-menu > li:nth-of-type(2) > a',
    EditAccount: 'li.woocommerce-MyAccount-navigation-link.woocommerce-MyAccount-navigation-link--edit-account > a',






}