/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {render} from 'react-dom';
import App from './containers/App';
import Cats from './containers/Cats';
import CatSound from './containers/CatSound';
import JapanSong from './containers/JapanSong';
import Drinks from './containers/Drinks';
import Restos from './containers/Restos';
import SpicyFood from './containers/SpicyFood';
import XmasDining from './containers/XmasDining';

const init = () => {

  render(
    <App />,
    document.querySelector(`.react-mount`)
  );
  render(
    <Cats />,
    document.querySelector(`.cats-container`)
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
  render(
    <Restos />,
    document.querySelector(`.restos`)
  );
  render(
    <SpicyFood />,
    document.querySelector(`.spicyimg`)
  );
  render(
    <XmasDining />,
    document.querySelector(`.xmas-dining-article-wrapper`)
  );

};

init();
