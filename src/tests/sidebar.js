describe('sidebar', function () {
    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:8080');
    });

    it('should have 6 items in social component', function () {
        element.all(by.css('.header-bottom .social li')).getText()
            .then(function (socialItems) {
                expect(socialItems.length).toEqual(6);
            });
    });

    it('should have 5items in menu component', function () {
        element.all(by.css('.nav-menu li')).getText()
            .then(function (socialItems) {
                expect(socialItems.length).toEqual(5);
            });
    });

    it('should has the correct names in menu component', function () {
        let menuOptions = [
            "HOME",
            "ABOUT ME",
            "RESUME",
            "PORTFOLIO",
            "CONTACT",
        ]

        element.all(by.css('.nav-menu li')).each(function (menu, index) {
            expect(menu.getText()).toEqual(menuOptions[index]);
        });
    });

    it('should has avatar image', function () {
        let avatar = element(by.css('.header-wrap img'));
        expect(avatar.getAttribute("src")).not.toBeNull();
    });

    it('should has an image with the correct name', function () {
        let avatar = element(by.css('.header-wrap img'));
        expect(avatar.getAttribute("src")).toContain("avatar.jpg");
    });

    it('should has correct titles', function () {
        element.all(by.css('.site-title h1')).each(function (avatar) {
            expect(avatar.getText()).toEqual("Damián Pumar");
        });
    });
});