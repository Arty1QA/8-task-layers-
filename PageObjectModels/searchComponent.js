var SearchComponent = function () {
    var searchIcon = element(by.className('fa fa-lg fa-search'));
    var fileNumberTextbox = element(by.id('fileNumber'));
    var searchButton = element(by.id('irSearchButton'));
    var fileTreeName = element(by.className('tree-file-name ng-binding'));

    this.clickSearchIcon = function () {
        return searchIcon.click();
    };
    this.setFileNumber = function (number) {
        return fileNumberTextbox.sendKeys(number);
    };
    this.clickSearchButton = function () {
        return searchButton.click();
    };  
    this.verifyFileTreeName = function(){
        return fileTreeName.isDisplayed();
        };

      
};

module.exports = new SearchComponent();