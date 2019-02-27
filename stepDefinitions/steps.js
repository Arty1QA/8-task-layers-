const Globals = require('../utilities/Globals');
const { Given, When, Then} = require('cucumber');
const Login = require('../pageObjectModels/loginComponent.js');
const Search = require('../pageObjectModels/searchComponent.js');
const globals = new Globals();
const expect = globals.expect;

const login = new Login();
const search = new Search();

Given('login to Web Client', function (callback) {
  login.get().then(callback);
});

When('I enter user Name', function (callback) {
  login.setName('Admin').then(callback);
});

When('I enter password', function (callback) {
  login.passwordInput('xxxxxx').then(callback);
});

When('I logged in', function (callback) {
  login.buttonClick().then(callback);

});

Then('WC is opened', function () {
  return expect(login.verifyUser()).to.eventually.equal('Admin');
  
});

Given('user clicks on {string}', function (callback) {
  search.clickSearchIcon().then(callback);

});

When('user enter {string}', function (callback) {
  search.setFileNumber().then(callback);
});

When('user clicks {string}', function (callback) {
  search.clickSearchButton().then(callback);
});

Then('File is opened', function () {
  return expect(search.verifyFileTreeName()).to.eventually.equal(true);
  
});
