import React, {Component} from 'react';

class Cats extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div className='cats-wrapper'>
      <div className='cats-photos cats-allcats'>
        <div className='cats-group-1'>
          <div className='bg-cat delilah blend'> </div>
          <div className='bg-cat lily blend'> </div>
          <div className='bg-cat oscar blend'> </div>
          <div className='bg-cat goliath blend'> </div>
        </div>
        <div className='cats-group-2'>
          <div className='bg-cat dorothy blend'> </div>
          <div className='bg-cat tom blend'> </div>
          <div className='bg-cat romeo blend'> </div>
        </div>
        <div className='cats-group-3'>
          <div className='bg-cat clickme'> </div>
          <div className='bg-cat jerry blend'> </div>
          <div className='bg-cat tiffany blend'> </div>
          <div className='bg-cat miko blend'> </div>
        </div>
      </div>
      <article className='cats-profile'>
        <header className='cats-profile-header'>
          <img src='assets/img/paws.png' alt='cat paws' className='cats-paws' />
          <video src='assets/video/delilah.mp4' autoPlay loop className='cats-video'>
          </video>
          <h1 className='cats-meet'>Meet Delilah</h1>
        </header>
        <p className='cats-detail-text'><span className='yellow'>Delilah</span> is the most famous of his cat clan. She was adopted near the end of 1987. Freddie wrote the song
          <span className='yellow'>‘Delilah’</span> about this large tricoloured beauty. She was a Tabby that did everything she pleased. They say she took over the house. That’s also what the lyrics of the song say. At first you would think it’s about
          a woman, but when you hear the lyric ‘When you pee all over my Chippendale suite’, it’s clear that’s not the case. <br />
          <span className='yellow'>Delilah</span> was very favoured by Freddie. That was because she was always the first for everything. The first to get food, the first to get on his lap…<br /> Jacky Smith, who has been running the official Queen Fan Club
          for more than 21 years, said that <span className='yellow'>Delilah</span> was a real funny cat. She was a bit of a bully to the other cats and because of that she’d often ran to Freddie for safety so the other cats wouldn’t gang up on her. That’s
          why Freddie favoured her and picked her up most. She also slept a lot at the foot of his bed and in the laundry baskets.
        </p>
      </article>
      </div>
    );
  }

}

export default Cats;
