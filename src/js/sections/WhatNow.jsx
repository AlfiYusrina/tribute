import React from 'react';

const WhatNow = () => {
  return (
    <section className='what-now'>
      <div className='what-now-insider'>
          <header>
            <h1 className='section-title'>What Now</h1>
          </header>
          <p className='section-text'>Freddie Mercury knew he was going to die, but before that happened, he made sure that <span className='what-now-highlight'>all of his beloved cats would be taken care of</span>. All of them stayed at Garden Lodge and Mary took care of them.  Today, they still live there and Delilah is often spotted on the top of the wall. So it’s clear that she is still the ruler of the house and that’s exactly what Freddie would have wanted.
          </p>
          <img className='what-now-img' src='assets/img/catsleepy.gif' alt='Cat is asleep' title='Sleepy Cat' />
      </div>
    </section>
  );
};

export default WhatNow;
