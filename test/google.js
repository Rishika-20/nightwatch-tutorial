module.exports = {

    '@tags': ['google'], // to run this test file use this command -> npm test -- --tag google
    'Google advanced search : Elon musk': (browser) => {
       // defining selectors.
         const mainQueryInput = 'input[name="as_q"]';
         const mainQuery = 'Elon Musk';

         const languageDropDownOpenSelector = '#lr_button';
         const languageDropDownValueSelector = '.goog-menuitem[value ="lang_it"]';
           
         const lastUpdateDropDownOpenSelector = '#as_qdr_button';
         const lastUpdateDropDownMonthSelector = '.goog-menuitem[value ="m"]';
        //  const lastUpdateDropDownMonthSelector = '#:82[value= "m"]';
        const submitButtonToPerformSearch = '.jfk-button[type="submit"]';
        const resultPageQuerySelectorForSearchOPeration = 'input[name="q"]'

        /**
         * using debugger statement it will make a pause when the execution reached to the debugger statement.
         * After pause we can inspect that what contains in browser.
         */
         debugger;
         
        browser
        .url('https://www.google.com/advanced_search')
        .setValue(mainQueryInputSelector,mainQuery)
         /**
         * Advanced version of the language selector from dropdown.
         */
           .selectFilter('language','it')
        // .click(languageDropDownOpenSelector) // selecting the drop down .
        // .click(languageDropDownValueSelector) // selecting a drop down value .
        .click(lastUpdateDropDownOpenSelector)
        .click(lastUpdateDropDownMonthSelector)
        .click(submitButtonToPerformSearch)
        // for debuging we are gointg to save screenshots.

       /**
        * Now checking that the above selectors exists in the query param or not after clicking on search.
        */

        // .assert.urlContains('as_q=Elon+Musk')
        // .assert.urlContains('lr=lang_it')
        // .assert.urlContains('as_qdr=m')      

         /**
          * Add a message parameter.
          */

        .assert.urlContains('as_q=Elon+Musk','Query is to validate Elon Musk')
        .assert.urlContains('lr=lang_it','Query is to validate language is italian')
        .assert.urlContains('as_qdr=m','Query is to validate updates from a past month')  

        /**
         * Checking the URL: ways to check this are:
         *  Element visibility :---> get the element or check if the element text's value is correct or not.
         *  Text visibility : ---> 
         */

          /**
           *  We cann't add a log with expect.element function, without log it won't state clear info.It's working here.
           */
                 browser.expect.element(resultPageQuerySelectorForSearchOPeration).to.be.present;

          /**
           * To add logs we'll use assert.visible function.
          //  */

              //.waitForElementNotVisible(resultPageQuerySelectorForSearchOPeration,6000)
             //browser.assert.visible(resultPageQuerySelectorForSearchOPeration,'UI: Elon Musk query verification.')
               // .saveScreenshot('tests_output/google.png')
    }



} 
