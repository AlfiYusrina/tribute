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
      <img src='assets/img/callDel.png' alt='Call Delilah' title='Press to call Delilah' onClick={this.handleClickAudio} />
    );
  }
}

export default CatSound;
