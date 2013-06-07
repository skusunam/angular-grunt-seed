## angular-grunt-seed — the seed for AngularJS apps with Grunt support (jshint, Karma, Watch, connect etc)

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app. You can use it to quickly bootstrap your angular webapp projects and dev environment for these projects. This comes with default Grunt build for lint, Karma, Watch etc.


## How to use angular-grunt-seed

Clone the angular-grunt-seed repository and start hacking...


### Running the app during development

> grunt

This will use concurrent task runner to do following tasks in a watch mode:

1) Watch for any JS (src and test files) changes and run jsHint

2) Watch for any JS (src and test files) changes and run Karma

3) Start the Node server at "9000"


## Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      index.html        --> app layout file (the main html template file of the app)
      index-async.html  --> just like index.html, but loads js files asynchronously
      js/               --> javascript files
        app.js          --> application
        controllers.js  --> application controllers
        directives.js   --> application directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
      lib/              --> angular and 3rd party javascript libraries
        angular/
          angular.js        --> the latest angular js
          angular.min.js    --> the latest minified angular js
          angular-*.js      --> angular add-on modules
          version.txt       --> version number
      partials/             --> angular view partials (partial html templates)
        partial1.html
        partial2.html

    config/testacular.conf.js        --> config file for running unit tests with Testacular
    config/testacular-e2e.conf.js    --> config file for running e2e tests with Testacular

    scripts/            --> handy shell/js/ruby scripts
      e2e-test.sh       --> runs end-to-end tests with Testacular (*nix)
      e2e-test.bat      --> runs end-to-end tests with Testacular (windows)
      test.bat          --> autotests unit tests with Testacular (windows)
      test.sh           --> autotests unit tests with Testacular (*nix)
      web-server.js     --> simple development webserver based on node.js

    test/               --> test source files and libraries
      e2e/              -->
        runner.html     --> end-to-end test runner (open in your browser to run)
        scenarios.js    --> end-to-end specs
      lib/
        angular/                --> angular testing libraries
          angular-mocks.js      --> mocks that replace certain angular services in tests
          angular-scenario.js   --> angular's scenario (end-to-end) test runner library
          version.txt           --> version file
      unit/                     --> unit level specs/tests
        controllersSpec.js      --> specs for controllers
        directivessSpec.js      --> specs for directives
        filtersSpec.js          --> specs for filters
        servicesSpec.js         --> specs for services
