module.exports = {
    'My first Nightwatch Test':(browser) => {
        browser
           .url('https://news.ycombinator.com/')
           .waitForElementVisible('.hnname')

           //DEPRECATED: the assertion .containsText() has been deprecated and will be removed from future versions. Use assert.textContains().                      │
           .assert.containsText(".hnname","Hacker News");

    }
}