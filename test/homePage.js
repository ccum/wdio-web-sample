
const assert = require('assert')

describe('webdriver.io page', () => {
    console.log("HOOOOOLA");
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        const title = browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
})