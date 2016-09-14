module.exports = function() {
};

module.exports.pitch = function (remainingRequest) {

  // Webpack 1.7.3 uses this.resourcePath. Leaving in remaining request for possibly older versions
  // of Webpack
  var configFilePath = this.resourcePath || remainingRequest;
  this.cacheable(true);

  if (!configFilePath || configFilePath.trim() === '') {
    var msg = 'You specified the font-awesome-webpack-sass with no configuration file. Please specify' +
      ' the configuration file, like: \'font-awesome-webpack-sass!./font-awesome.config.js\' or use' +
      ' require(\'font-awesome-webpack-sass\').';
    console.error('ERROR: ' + msg);
    throw new Error(msg);
  }
  
  var config = require(configFilePath);
  var styleLoader = config.styleLoader || 'style-loader!css-loader!sass';

  var styleLoaderCommand = 'require(' + JSON.stringify('-!' + styleLoader + '!' +
      require.resolve('./font-awesome-styles.loader.js') + '!' + configFilePath) + ');';
  return styleLoaderCommand;
};