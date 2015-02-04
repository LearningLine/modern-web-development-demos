describe('myApp', function() {
    it('should be able to add 2 numbers', function() {
        browser.get('/');

        element(by.model('a')).sendKeys('123');
        element(by.model('b')).sendKeys('456');

        browser.sleep(1000);

        element(by.buttonText('Add')).click();

        expect(element(by.binding('sum2')).getText()).toBe('579');

        browser.sleep(1000);
    });
});
