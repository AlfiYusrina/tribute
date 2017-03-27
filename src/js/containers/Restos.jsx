import React, {Component} from 'react';
import ChickenIcon from '../components/ChickenIcon';
import PizzaIcon from '../components/PizzaIcon';
import ToastIcon from '../components/ToastIcon';
import FishIcon from '../components/FishIcon';
import FarvallaIcon from '../components/FarvallaIcon';
import DetailResto from '../components/DetailResto';

const data =  {
  farvala: {
    title: `La Meridiana`,
    text: `Freddie has been here, why don’t you try Pappardelle ai Funghii di Bosco?`,
    link: `http://www.lameridianarestaurant.co.uk/`
  },
  fish: {
    title: `La Famiglia`,
    text: `Freddie like dishes with onions. Why don’t you try Pesce Spada all’Agrodolce, it is swordfish topped with onions, courgettes, and a balsamic vinegar. `,
    link: `http://www.lafamiglia.co.uk/`
  },
  pizza: {
    title: `Orso`,
    text: `Who doesn’t like pizza? Try Pizza Diavolo, when you visit here.  `,
    link: `http://www.orsorestaurant.co.uk/`
  },
  toast: {
    title: `Richoux`,
    text: `Freddie’s regular treat at Richoux was their Welsh Rarebit. Freddie did like his cheese on toast done with a touch of luxury.`,
    link: `http://richoux.co.uk/`
  },
  chicken: {
    title: `La Caprice `,
    text: `Did you know Freddie liked scrambled eggs? Try Argll Smoked Salmon with scambled eggs here.`,
    link: `https://www.le-caprice.co.uk/`
  }
};
console.log(data);
class Restos extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <article className='fav-restos-article'>
        <svg className='fav-restos-icons' version='1.1' alt='Five icons on a map' title='favourite restos' width='321' height='568'>
          <FarvallaIcon />
          <FishIcon />
          <PizzaIcon />
          <ToastIcon />
          <ChickenIcon />
        </svg>

        <DetailResto />
      </article>
    );
  }

}

export default Restos;
