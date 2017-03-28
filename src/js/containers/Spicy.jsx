import React, {Component} from 'react';

class Spicy extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  handleClickImg = () =>  {

  }

  render() {
    return (
      <img src='assets/img/feedme.png' onClick={this.handleClickImg} alt='freddie eating a pepper' title='freddie eating a pepper' className='hot-spicy-img' />
    );
  }

}

export default Spicy;
