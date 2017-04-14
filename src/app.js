import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import FontFaceObserver from 'fontfaceobserver';
import configureStore from './configureStore';

const store = configureStore();

const roboto400 = new FontFaceObserver("Roboto", {
  weight: 400
});
const roboto700 = new FontFaceObserver("Roboto", {
  weight: 500
});

Promise.all([
  roboto400.load(),
  roboto700.load()
]).then(function() {
  document.documentElement.className += " fonts-loaded";
});

render(
  <Root store={store} />,
  document.getElementById('root')
);
