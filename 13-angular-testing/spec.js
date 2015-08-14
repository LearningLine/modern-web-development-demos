// var homePage = require('../pageObjects/homePage');

describe('my app', function() {
    beforeEach(function() {
        browser.get(process.env.URL || 'http://localhost:8000/');
    });

    it('should show my name', function() {
        var text = element(by.binding('name')).getText();

        expect(text).toEqual('Jason');

        // browser.sleep(4000);
    });

    it('should show update the name after typing in the input', function() {
        element(by.model('name')).clear().sendKeys('Alice');

        var text = element(by.binding('name')).getText();

        expect(text).toEqual('Alice');

        browser.sleep(2000);
    });
});
