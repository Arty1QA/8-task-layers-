const Globals = require('../utilities/Globals');
const { Given, When, Then, Before} = require('cucumber');
var LoginComponent = require('../pageObjectModels/loginComponent.js');
var SearchComponent = require('../pageObjectModels/searchComponent.js');


// Chai
const globals = new Globals();
const expect = globals.expect;

Before({timeout: 10*1000}, function(){
    LoginComponent.get();
    LoginComponent.setName('Admin');
    LoginComponent.passwordInput('passsword');
    LoginComponent.button();
    //browser.ignoreSynchronization = false; 
    return browser.sleep(3000);
});    

Given('user clicks on {string}', async function (string) {
  await SearchComponent.clickSearchIcon(string);
});

When('user enter {string}', async function (string) {
  await SearchComponent.setFileNumber('File_2');
  return browser.sleep(3000);
  });

When('user clicks {string}', async function (string) {
    await SearchComponent.clickSearchButton(string);
    return browser.sleep(3000);
  });

  Then('File is opened', async function () {
    await expect(SearchComponent.verifyFileTreeName()).to.eventually.equal(true);
  });
