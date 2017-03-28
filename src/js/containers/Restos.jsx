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
  state = {
    value: `pizza`
  };
  handleIconClick = e => {
    const value = e.currentTarget.id;
    this.setState({value});
  }

  render() {
    const {value} = this.state;
    const item = data[value];
    return (
      <article className='fav-restos-article'>
        <svg className='fav-restos-icons' version='1.1'>
          <FarvallaIcon active={value === `farvala`} onClick={this.handleIconClick} />
          <FishIcon active={value === `fish`} onClick={this.handleIconClick} />
          <PizzaIcon active={value === `pizza`} onClick={this.handleIconClick} />
          <ToastIcon active={value === `toast`} onClick={this.handleIconClick} />
          <ChickenIcon active={value === `chicken`} onClick={this.handleIconClick} />
        </svg>

        <DetailResto title={item.title} link={item.link} text={item.text} />
      </article>
    );
  }

}

export default Restos;
