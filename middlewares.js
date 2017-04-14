function addDevMiddlewares (app, config) {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(config);

  const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: '/static/',
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));
};

module.exports = function (app, options) {
  const isProd = process.env.NODE_ENV === 'production';

  const config = require('./webpack.config.babel');
  if (!isProd) {
    addDevMiddlewares(app, config);
  }
  return app;
};
