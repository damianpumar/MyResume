exports.config = {
    framework: 'jasmine',
 	//seleniumAddress: 'http://localhost:4444/wd/hub',
 	seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
  	specs: ['tests/**.js']
};