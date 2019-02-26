const Reporter = require('./reports/reporter.js');


exports.config = {

	directConnect : true,
	framework : 'custom',
	frameworkPath : require.resolve('protractor-cucumber-framework'),

	capabilities : {
		browserName : 'chrome',
		chromeOptions : {
			args : [ "--window-size=800,600" ]
		}
	},

	specs : [ './features/*.feature' ],

	cucumberOpts : {
		require : [ './stepDefinitions/steps.js', './stepDefinitions/hooks.js' ],
		format : 'json:./reports/json/cucumber_report.json',
		tags : '(@run)'
	},

	onPrepare : function() {
		browser.manage().window().maximize();
	},

	onComplete : function() {
		Reporter.createHTMLReport();
	}
};