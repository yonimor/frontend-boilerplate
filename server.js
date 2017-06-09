var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var open = require('open');
var config = require('./dev.config.js');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(config.port, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  open('http://localhost:' + config.port + '/webpack-dev-server/');

  console.log('Listening at localhost:3000');
});
