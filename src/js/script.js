/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {render} from 'react-dom';
import App from './containers/App';
import CatSound from './containers/CatSound';
const init = () => {

  render(
    <App />,
    document.querySelector(`.react-mount`)
  );
  render(
    <CatSound />,
    document.querySelector(`.catssound`)
  );
};

init();
