files = [
	JASMINE,
	JASMINE_ADAPTER,
    '../app/lib/angular/angular.js',
    'lib/angular/angular-mocks.js',

    '../app/js/*.js',
	'unit/*Spec.js'
];

// test results reporter to use
// possible values: dots || progress || growl
reporters = ['progress'];

// enable / disable colors in the output (reporters and logs)
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Firefox'];

// preprocessors = {
//   '../app/js/*.js': 'coverage'
// };
// reporters = ['coverage'];
// //type values: html (default) || lcov (& html) || lcov only 
// //|| text || text-summary || cobertura (xml format for Jenkins)
// coverageReporter = {
//   type : 'lcov',
//   dir : '../coverage/'
// }