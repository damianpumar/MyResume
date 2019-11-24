exports.config = {
	capabilities: {
        'directConnect': true,
        'browserName': 'chrome',
        chromeOptions: {
            args: ["--headless", "--disable-gpu", "--window-size=800x600"]
        }
    },
    framework: 'jasmine',
 	//seleniumAddress: 'http://localhost:4444/wd/hub',
 	seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
  	specs: ['tests/**.js']
};