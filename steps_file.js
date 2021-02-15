// in this file you can append custom step methods to 'I' object

module.exports = function() {
    return actor({

        // Define custom steps here, use 'this' to access default methods of I.
        // It is recommended to place a general 'login' function here.
        loginAsAdmin: function() {
            this.amOnPage('/wp-admin/');
            //this.click('Log in');
            this.fillField('#user_login', 'admin');
            this.fillField('#user_pass', 'admin');
            this.click('Log In');
        },
        loginAsVendor: function() {
            this.amOnPage('/my-account/');
            // this.click('Log in');
            this.fillField('username', 'alvitazwar@wedevs.com');
            this.fillField('password', 'alvitazwar1122334456');
            this.click('login');
        },
        loginAsVendorTwo: function() {
            this.amOnPage('/my-account/');
            // this.click('Log in');
            this.fillField('username', 'vendor-two');
            this.fillField('password', '123456');
            this.click('login');
        },
        loginAsCustomer: function() {
            this.amOnPage('/my-account/');
            this.fillField('username', 'customer_one@gmail.com');
            this.fillField('password', 'alvitazwar12345');
            this.click('login');
        },

    });
}