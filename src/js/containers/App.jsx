import React from 'react';
import Cats from '../sections/Cats';
import SpoiledCats from '../sections/SpoiledCats';
import WhatNow from '../sections/WhatNow';
import Foods from '../sections/Foods';
import WineLover from '../sections/WineLover';
import FavRestos from '../sections/FavRestos';
import HotSpicy from '../sections/HotSpicy';
import XmasDining from '../sections/XmasDining';
import Japan from '../sections/Japan';

const App = () => {
  return (
    <div>
    <Cats />
    <SpoiledCats />
    <WhatNow />
    <Foods />
    <WineLover />
    <FavRestos />
    <HotSpicy />
    <XmasDining />
    <Japan />
    </div>
  );
};

export default App;
