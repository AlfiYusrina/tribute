import React from 'react';

const Foods = () => {
  return (
    <section className='foods'>
    <div className='foods-insider'>
    <header>
      <h1 className='section-title'>Light Eater</h1>
    </header>
    <p className='section-text'>Some of us live to eat, but Freddie was one of those people <span className='foods-highlight'>who ate to live</span>. He was the master of moving food around the plate to give the appearance of having eaten a good amount. <span className='foods-highlight'>He did enjoy good food</span>, but really didn’t need to consume very much. He loved entertaining guests at meals in the dining room at Garden Lodge and was able to disguise his non-eating by making sure everyone else was ok during the meal. Don’t get us wrong, Freddie always ate <span className='foods-highlight'>enough to keep him going,</span> but his personal assistant said that he can’t remember one time when Freddie leant back in the chair saying ‘I’m stuffed!’</p>
    <img className='foods-img' src='assets/img/cookiesandtea.gif' alt='Cookies and Tea' title='Cookies and Tea' />
    </div>
    </section>
  );
};

export default Foods;
