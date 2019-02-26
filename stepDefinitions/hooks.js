'use strict';

const { After, Status } = require("cucumber");
  
    After(function(scenario) {
      if (scenario.result.status === Status.FAILED) {
        const attach = this.attach;
        return browser.takeScreenshot().then(function(png) {
          const decodedImage = new Buffer(png, "base64");
          return attach(decodedImage, "image/png");
        });
      }
    });