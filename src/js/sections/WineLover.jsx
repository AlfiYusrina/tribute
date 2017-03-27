import React from 'react';
import DrinkWidget from '../components/DrinkWidget';
const WineLover = () => {
  return (
    <section className='wine'>
      <div className='wine-insider flex'>
        <div className='wine-texts'>
        <header>
          <h1 className='section-title'>Wine Lover</h1>
        </header>
        <p className='section-text'>Based on his personal assistant, as a rough guide Freddie drinks <span className='wine-highlight'>tea in the morning,</span> the tea was Twinings Earl Grey. He likes tea with sugars and some milk, like other Brits do. <span className='wine-highlight'>In the later afternoon</span>, he drinks <span className='wine-highlight'>champagne or wine</span> and with food. The champagne was usually Louis Roederer Cristal and the white wine was his favourite imported from Switzerland, San Saphorin. Freddie was actually quite knowledgeable about wine and he would know which one he would want with various meals with friends. <span className='wine'>In the evening,</span> he drinks <span className='wine-highlight'>vodka and tonic.</span> His favourite vodka was Stolichnaya, but in some countries that isn’t available so he would drink Moscovskaya, really the same under a different name. Schweppes was the preferred mixer.</p>
        </div>
        <div className='wine-images'>
          <img  className='wine-img' src='assets/img/freddiedrinks.png' />
          <DrinkWidget />
        </div>
      </div>
    </section>
  );
};

export default WineLover;