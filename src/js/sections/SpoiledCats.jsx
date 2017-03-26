import React, {Component} from 'react';

class SpoiledCats extends Component  {

  handleClickAudio = () =>  {
    if (this.playing)
      return;

    const audio = new Audio(`assets/audio/callDelilah.mp3`);
    audio.play();
    this.playing = true;
    audio.addEventListener(`ended`, () => { this.playing = false; });
  }

  render() {
    return (
      <section className='spoiled-cats'>
        <div className='spoiled-cats-insider'>
          <header >
            <h1 className='section-title'>Spoiled Cats</h1>
          </header>
          <div className='spoiled-cats-content flex'>
            <p className='section-text spoiled-cats-text'>Freddie Mercury just wanted the cats to be happy and have a loving home. It made him feel really good that he could do something like that.
            He spoiled the cats very much. They didn’t get normal cat food much. Mostly, he prepared some <span className='spoiled-cats-highlight'>fresh meat</span> for them, like chicken. He also gave them a lot of toys and treats. When it was Christmas, he got them their own <span className='spoiled-cats-highlight'>Christmas stockings</span> filled with treats and toys and when it was their birthday, they celebrated.
            <br />
            When he was on tours, he often <span className='spoiled-cats-highlight'>made phone calls</span> to his cats. He wanted to hear them and make sure they were alright. Mary would than take the cat on her lap en hold the phone close to their face so they could hear hem well.
            His fans knew how fond Mercury was of his cats, so they often sent stuff for his cats to his fan office. A lot of them also named their cat after Freddie, who was really flattered by those gestures.
            <br />
            It was really easy for everybody to see Freddies love for cats. On the inside of the album ‘Classic Queen’, you could see a portrait of Mercury <span className='spoiled-cats-highlight'>wearing a vest</span> with cats on it. If you look close, you can see that the cats on the vest are actually his own.
            </p>
            <img src='assets/img/callDel.png' alt='Call Delilah' title='Press to call Delilah' onClick={this.handleClickAudio} />
          </div>
        </div>
      </section>
    );
  }
}

export default SpoiledCats;
