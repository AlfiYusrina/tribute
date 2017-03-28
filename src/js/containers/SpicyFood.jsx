import React, {Component} from 'react';
import ImgSpicy from '../components/ImgSpicy';

class SpicyFood extends Component {

  state = {
    eating: true
  };

  handleClickImg = () =>  {

    this.setState({eating: !this.state.eating});

  }

  render() {
    const {eating} = this.state;
    const img = eating ? `assets/img/feedme.png` : `assets/img/wowspicy.png`;

    return (
    <ImgSpicy img={img} onClick={this.handleClickImg} />
    );
  }

}

export default SpicyFood;
