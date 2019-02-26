var LoginComponent = function () {
    var nameImput = element(by.name('UserName'));
    var passwordInput = element(by.name('Password'));
    var buttonClick = element(by.className('loginBtn'));
    
    this.get = function () {
        browser.ignoreSynchronization = true; 
        return browser.get('https://testenv/');  //
      
    };
    
    this.setName = function(user){
        return nameImput.sendKeys(user);
    };
    
    this.passwordInput = function(password){
    return passwordInput.sendKeys(password);
    };
    
    this.button = function(){
    return buttonClick.click();

    };
    };
    
    module.exports = new LoginComponent();
