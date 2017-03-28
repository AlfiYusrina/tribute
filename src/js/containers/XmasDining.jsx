import React, {Component} from 'react';
import SliderLine from '../components/SliderLine';
import XmasDiningDetail from '../components/XmasDiningDetail';

const data =  {
  '9AM': {
    time: `9AM`,
    img: `assets/img/preparation.png`,
    title: `BREAKFAST TIME`,
    text: `Christmas Day dawned and Freddie had a small breakfast at about 9 am. Freddie would be going round the house making sure everything was in place for his guests. You would hear his laughter louder than the Christmas carols coming out of the sound system.`
  },
  '1PM': {
    time: `1AM`,
    img: `assets/img/teatime.png`,
    title: `CHAMPANGE TIME`,
    text: `Everyone was always prompt and the house was full of voices by 1pm. Champagne was opened and served (opened by Jim and served by others) and Freddie was everywhere.`
  },
  '3PM': {
    time: `3AM`,
    img: `assets/img/lunch.png`,
    title: `LUNCH TIME`,
    text: `Lunch was served at 2 pm. After that they were opening their gifts.  The Queen’s Speech was on the TV at 3 pm. Generally they were enjoying tea/coffee and the cakes. The house was eerily quiet for a few hours as the weight of the food in stomachs brought down the eyelids. `
  },
  '8PM': {
    time: `5AM`,
    img: `assets/img/tv.png`,
    title: `TV TIME`,
    text: `By 8 pm, they were busy making turkey and stuffing sandwiches, heating up plates of other food and generally pigging out to spend a few hours in front of the TV before a well deserved rest, to get ready for what Boxing Day would bring.`
  }
};

class XmasDining extends Component {
  state = {t: 0};

  handleChangeChannel = (value, channel) => {
    this.setState({[channel]: value});
  }

  getValueByHour = hour => {
    if (hour <= 9) {
      return `9AM`;
    }
    if (hour >= 10 && hour <= 13) {
      return `1PM`;
    }
    if (hour >= 14 && hour <= 19) {
      return `3PM`;
    }
    else { return `8PM`; }
  }
  render() {
    const {t} = this.state;
    const value = this.getValueByHour(t);
    const item = data[value];

    return (
      <article className='xmas-dining-article'>
          <div className='xmas-dining-clock'>
          <SliderLine value={t} channel={`t`} onChangeT={this.handleChangeChannel} />
            <img className='xmas-dining-img-insider' src='assets/img/pickme.png' alt='clock' title='clock' />
          </div>

        <XmasDiningDetail title={item.title} text={item.text} img={item.img} time={item.time} />
      </article>
    );
  }

}

export default XmasDining;
