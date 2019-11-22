describe('verify home page', function() {

    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:8080');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Damián Pumar');
    });
});