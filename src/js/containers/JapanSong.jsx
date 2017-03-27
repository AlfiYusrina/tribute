import React, {Component} from 'react';

class JapanSong extends Component  {

  handleClickAudio = () =>  {
    if (this.playing)
      return;

    const audio = new Audio(`assets/audio/LaJaponaise.mp3`);
    audio.play();
    this.playing = true;
    audio.addEventListener(`ended`, () => { this.playing = false; });
  }

  render() {
    return (
      <img src='assets/img/hakataDoll.png' alt='Press to play the song' title='Hakata Doll button' onClick={this.handleClickAudio} />
    );
  }
}

export default JapanSong;
