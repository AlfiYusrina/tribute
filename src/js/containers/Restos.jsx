import React, {Component} from 'react';
import ChickenIcon from '../components/ChickenIcon';
import PizzaIcon from '../components/PizzaIcon';
import ToastIcon from '../components/ToastIcon';
import FishIcon from '../components/FishIcon';
import FarvallaIcon from '../components/FarvallaIcon';
import DetailResto from '../components/DetailResto';
class Restos extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <article className='fav-restos-article'>
        <svg className='fav-restos-icons' version='1.1' alt='Five icons on a map' title='favourite restos' width='321' height='568'>
          <ChickenIcon />
          <PizzaIcon />
          <ToastIcon />
          <FishIcon />
          <FarvallaIcon />
        </svg>

        <DetailResto />
      </article>
    );
  }

}

export default Restos;
