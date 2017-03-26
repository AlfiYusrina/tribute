import React, {Component, PropTypes} from 'react';

class DrinkWidget extends Component {

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
        <button onClick={this.handleClickDecrement}> - </button>
        <p className='drinks-text'>Change Drink</p>
          <button onClick={this.handleClickIncrement}> + </button>
      </div>
    );
  }

}
DrinkWidget.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number
};

DrinkWidget.defaultProps = {
  min: 1,
  max: 3
};
export default DrinkWidget;
