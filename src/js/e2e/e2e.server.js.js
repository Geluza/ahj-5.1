const webpack = require('webpack');// eslint-disable-line
const WebpackDevServer = require('webpack-dev-server'); // eslint-disable-line
const config = require('../webpack.dev');// eslint-disable-line

const server = new WebpackDevServer(webpack(config), {});
server.listen(9000, 'localhost', (err) => {
  if (err) {
    return;
  }
  if (process.send) {
    process.send('ok');
  }
});
