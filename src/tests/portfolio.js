describe('verify home page', function () {
    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:8080');
    });

    it('should has 4 type of filters', function () {
        element.all(by.css('#filters li')).getText()
            .then(function (filters) {
                expect(filters.length).toEqual(4);
            });
    });

    it('should has 9 portfolio items', function () {
        element.all(by.css('#portfolio .portfolio-items .media-cell')).getText()
            .then(function (filters) {
                expect(filters.length).toEqual(9);
            });
    });
});