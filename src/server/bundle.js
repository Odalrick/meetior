const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../../webpack.config.js');

module.exports = function () {

  let bundleStart;
  const compiler = Webpack(webpackConfig);
  compiler.plugin('compile', function() {
    console.log('Bundling...');
    bundleStart = Date.now();
  });
  compiler.plugin('done', function() {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  });

  const bundler = new WebpackDevServer(compiler, webpackConfig.devServer)
  bundler.listen(8080, 'localhost', function () {
    console.log('Bundling project, please wait...');
  });

};
