'use strict';

class Search {
    clickSearchIcon() {
        return element(by.className('fa fa-lg fa-search')).click();
    };
    
    setFileNumber(number) {
      
        return browser.wait(ExpectedConditions.visibilityOf(element(by.id('fileNumber'))), 3000, 'error message').then (function () {
      return element(by.id('fileNumber')).sendKeys(number);
    })
    };

    clickSearchButton() {
        //return element(by.id('irSearchButton')).click();
        return browser.wait(ExpectedConditions.visibilityOf(element(by.id('irSearchButton'))), 3000, 'error message').then (function () {
            return element(by.id('irSearchButton')).click();
    })
    };

    verifyFileTreeName () {
        //return element(by.className('tree-file-name ng-binding')).isDisplayed();
        return browser.wait(ExpectedConditions.visibilityOf(element(by.className('tree-file-name ng-binding'))), 3000, 'error message').then (function () {
            return element(by.className('tree-file-name ng-binding')).isDisplayed();
        })
};
};

module.exports = Search;
