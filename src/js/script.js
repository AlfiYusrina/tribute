/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {render} from 'react-dom';
import App from './containers/App';
import CatSound from './containers/CatSound';
import JapanSong from './containers/JapanSong';
import Drinks from './containers/Drinks';
const init = () => {

  render(
    <App />,
    document.querySelector(`.react-mount`)
  );
  render(
    <CatSound />,
    document.querySelector(`.catssound`)
  );
  render(
    <JapanSong />,
    document.querySelector(`.japanSong`)
  );
  render(
    <Drinks />,
    document.querySelector(`.drinks`)
  );
};

init();
