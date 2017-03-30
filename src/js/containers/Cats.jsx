import React, {Component} from 'react';
import CatPhotos from '../components/CatPhotos';
import DetailCat from '../components/DetailCat';

const cats =  {
  delilah: {
    name: `Delilah`,
    text: `<span class='yellow'>Delilah</span> is the most famous of his cat clan. She was adopted near the end of 1987. Freddie wrote the song
      <span class='yellow'>‘Delilah’</span> about this large tricoloured beauty. She was a Tabby that did everything she pleased. They say she took over the house. That’s also what the lyrics of the song say. At first you would think it’s about
      a woman, but when you hear the lyric ‘When you pee all over my Chippendale suite’, it’s clear that’s not the case. <br />
      <span class='yellow'>Delilah</span> was very favoured by Freddie. That was because she was always the first for everything. The first to get food, the first to get on his lap…<br /> Jacky Smith, who has been running the official Queen Fan Club
      for more than 21 years, said that <span class='yellow'>Delilah</span> was a real funny cat. She was a bit of a bully to the other cats and because of that she’d often ran to Freddie for safety so the other cats wouldn’t gang up on her. That’s
      why Freddie favoured her and picked her up most. She also slept a lot at the foot of his bed and in the laundry baskets.`
  },
  goliath: {
    name: `Goliath`,
    text: `<span class='yellow'>Goliath </span>, a little black cat, arrived the
    same day as Delilah. The tiny creature disappeared a lot, mostly when Freddie
    had company. One day, when <span class='yellow'>Goliath</span> was gone for
    a long time, Freddie was so scared that he and his staff desperately searched
    the whole house. Eventually they found him sleeping in the marble sink of his
    bathroom.`
  },
  romeo: {
    name: `Romeo`,
    text: `Mercury had another one, <span class='yellow'>Romeo</span>. This
    little white-faced cat was found by Jim Hutton, Freddies boyfriend.
    <span class='yellow'>Romeo</span> Turned out quite the fighter. Freddie
    always wanted a white cat and was very happy to have him.`
  },
  lily: {
    name: `Lily`,
    text: `Later, he also had <span class='yellow'>Lily</span>, another white cat.`
  },
  miko: {
    name: `Miko`,
    text: `<span class='yellow'>Miko</span>, yet another cat, came with Freddie
    from a trip to Japan, one of his favourite countries. Japan was very inspiring
    for him so he gave this cat a Japanese name. `
  },
  oscar: {
    name: `Oscar`,
    text: `One of the other cats, <span class='yellow'>Oscar</span> , came into
    his life via his formal boyfriend, Tony Bastin. But one day, when Tony was
    unfaithful, Freddie broke up with him and kept his cat
    <span class='yellow'>Oscar</span> out of revenge.
    <span class='yellow'>Oscar</span> was an orange and white cat and was a bit
    of a lonely tom. He went to visit other homes in the neighbourhood. Freddie
    had homes across the world, but all of his cats lived in Garden Lodge and
    this place is also were Freddie spent most of his time.`
  },
  tom: {
    name: `Tom`,
    text: `His first two cats were <span class='yellow'>Tom</span> and Jerry. He
    brought them in with Mary Austin, his ex-girlfriend and best friend, when
    Queen just started. He was fond of them and dedicated his album ‘Mr. Bad Guy’
    to Jerry. This was written by him: "This album is dedicated to my cat Jerry -
    also <span class='yellow'>Tom</span>, Oscar and Tiffany, and all the cat
    lovers across the universe - screw everybody else!”`
  },
  jerry: {
    name: `Jerry`,
    text: `His first two cats were Tom and <span class='yellow'>Jerry</span>. He
    brought them in with Mary Austin, his ex-girlfriend and best friend, when
    Queen just started. He was fond of them and dedicated his album ‘Mr. Bad Guy’
    to <span class='yellow'>Jerry</span>. This was written by him: "This album is
    dedicated to my cat <span class='yellow'>Jerry</span> - also
    Tom, Oscar and Tiffany, and all the cat lovers across the universe - screw
    everybody else!”`
  },
  tiffany: {
    name: `Tiffany`,
    text: `Mary Austin also gave Freddie another cat,
    <span class='yellow'>Tiffany.</span> She was a longhaired bluepoint and was
    very lovely.`
  },
  dorothy: {
    name: `Dorothy`,
    text: `A sweet grey cat called <span class='yellow'>Dorothy</span>,
    was adopted by him and his boyfriend Jim in Munich. She is the only cat that
    lives there and not in London.`
  }
};

class Cats extends Component {

  state = {value: `delilah`};

  handlePhotoClick = e  => {
    const value = e.currentTarget.id;
    this.setState({value});
  }

  render() {
    const {value} = this.state;
    const item = cats[value];

    return (
      <div className='cats-wrapper'>
      <CatPhotos onClick={this.handlePhotoClick} />
      <DetailCat name={item.name} text={item.text} />
      </div>
    );
  }

}

export default Cats;
