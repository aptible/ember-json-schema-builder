/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var options = {
    emberCliFontAwesome: { includeFontAwesomeAssets: false },
    vendorFiles: {
      'handlebars.js': null,
      fingerprint: { exclude: ['assets/images/data-environments'] }
    }
  };

  if (process.env.EMBER_ENV === 'staging' || process.env.EMBER_ENV === 'sandbox') {
    options.minifyCSS = {
      enabled: true
    };
    options.minifyJS = {
      enabled: true
    };
    options.fingerprint = {
      enabled: true
    };
    options.sourcemaps = {
      enabled: false
    };
  }

  var app = new EmberApp(defaults, options);

  return app.toTree();
};
