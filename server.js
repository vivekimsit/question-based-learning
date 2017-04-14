const path = require('path');
const Express = require('express');
const resolve = require('path').resolve;

const setup = require('./middlewares');
const app = new Express();

const port = process.env.PORT || 3000;;

setup(app, {
  outputPath: resolve(__dirname, 'build'),
  publicPath: '/static/',
});

app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, 'index.html'));
});

app.listen(port, error => {
  /* eslint-disable no-console */
  if (error) {
    console.error(error);
  } else {
    console.info(
      '🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.',
      port,
      port
    );
  }
  /* eslint-enable no-console */
});
