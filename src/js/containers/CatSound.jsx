import React, {Component} from 'react';

class CatSound extends Component  {

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
      <div>
        <img src='assets/img/callDel.png' className='spoiled-cats-tel' alt='Call Delilah' title='Press to call Delilah' onClick={this.handleClickAudio} />
        <img src='assets/img/oldtel.png' className='spoiled-cats-hidden' alt='Call Delilah' title='Press to call Delilah' onClick={this.handleClickAudio} />
      </div>
    );
  }
}

export default CatSound;
