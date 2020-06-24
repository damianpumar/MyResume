describe('verify home page', function () {
    const webTitle = "Damián Pumar";

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:8080');
    });

    it('should have a title', function () {
        expect(browser.getTitle()).toEqual(webTitle);
    });

    it('should have a title', function () {
        let mainTitle = element(by.css(".layout-medium h2"));
        expect(mainTitle.getText()).toEqual(webTitle);
    });
});