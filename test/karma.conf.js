files = [
  JASMINE,
  JASMINE_ADAPTER,
  '../app/lib/angular/angular.js',
  'lib/angular/angular-mocks.js',

  '../app/js/*.js',

  'unit/*Spec.js'
];

exclude = ['karma.conf.js'];

// test results reporter to use
// possible values: dots || progress || growl
reporters = ['progress'];

// web server port
port = process.env['KARMA_PORT'] || 8100;


// cli runner port
runnerPort = process.env['KARMA_RUNNER_PORT'] || 9100;


// enable / disable colors in the output (reporters and logs)
colors = process.env['KARMA_COLORS'] || true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari
// - PhantomJS
browsers = [process.env['KARMA_BROWSER'] || 'Chrome'];

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;