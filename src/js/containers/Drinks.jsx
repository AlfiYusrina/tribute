import React, {Component, PropTypes} from 'react';

class Drinks extends Component {

  state = {
    number: 3
  }

  componentDidMount() {
    const {min} = this.props;
    this.setState({number: min});
  }
  handleClickIncrement = () => {
    this.setState({number: this.state.number === this.props.max ? this.state.number + 0 : this.state.number + 1});
  }
  handleClickDecrement = () => {
    if (this.state.number > this.props.min) {
      this.setState({number: this.state.number - 1});
    }
  }

  render() {
    const {number} = this.state;
    return (
      <div className='drinks'>
        <img  className='wine-img' src={`assets/img/drink${number}.png`} alt='favourite drinks' title='favourite drinks' />
        <div className='drinks-insider'>
          <button className='wine-button-left' onClick={this.handleClickDecrement}><span className='hidden'> - </span> </button>
          <p className='drinks-text'><span className='hidden'>Change Drink</span></p>
          <button className='wine-button-right' onClick={this.handleClickIncrement}> <span className='hidden'> + </span></button>
        </div>
      </div>
    );
  }

}
Drinks.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number
};

Drinks.defaultProps = {
  min: 1,
  max: 3
};
export default Drinks;
