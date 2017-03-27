import React, {Component} from 'react';

class DetailResto extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div className='fav-resto-detail'>
      <header className='fav-restos-card'>
        <h1 className='fav-restos-card-name'>Richoux</h1>
      </header>
      <p className='section-text fav-restos-card-text'>Freddie’s regular treat at Richoux was their Welsh Rarebit. Freddie did like his cheese on toast done with a touch of luxury.</p>

      </div>
    );
  }

}

export default DetailResto;
