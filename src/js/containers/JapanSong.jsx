import React, {Component} from 'react';

class JapanSong extends Component  {
  tate = {isToggleOn: true};
  handleClickAudio = () =>  {
    if (this.audio) {
      this.paused = !this.paused;
      if (this.paused) {
        this.audio.pause();
      } else {
        this.audio.play();
      }
      return;
    }

    this.audio = new Audio(`assets/audio/LaJaponaise.mp3`);
    this.audio.play();
    this.playing = true;
    this.paused = false;
    //audio.addEventListener(`ended`, () => { this.playing = false; });

    this.setState(prevState => ({isToggleOn: !prevState.isToggleOn}));
  }

  render() {
    return (
      <img src='assets/img/hakataDoll.png' alt='Press to play the song'
      title='Hakata Doll button' onClick={this.handleClickAudio} />
    );
  }
}

export default JapanSong;
