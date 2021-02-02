'use strict';

const Helper = require('@codeceptjs/helper');
const puppeteer = require('puppeteer');

class MyHelper extends Helper {

    async demoFunction(selector, ...options) {
        const helper = this.helpers['Puppeteer'];
        var txtFrom = selector;
        try {
            if (txtFrom == '/*[@id="isAgeSelected"]') {
                return helper.click(selector, ...options);

            } else {
                console.log("Else executed");
            }
        } catch (error) {
            console.error("ALvi Tazwar", error);
        }



    }


}

module.exports = MyHelper;

// clickIfVisible
// try {
//   const numVisible = await helper.grabNumberOfVisibleElements(selector);

//   if (numVisible) {
//       return helper.click(selector, ...options);
//   }
// } catch (err) {
//   console.log('Skipping operation as element is not visible');
// }