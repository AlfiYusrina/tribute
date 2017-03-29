  import React, {PropTypes} from 'react';

  const CatPhotos = ({onClick}) => {
    return (
      <div className='cats-photos cats-allcats'>
        <div className='cats-group-1'>
          <div id='delilah' className='bg-cat delilah blend' onClick={onClick} > </div>
          <div id='lily' className='bg-cat lily blend' onClick={onClick} > </div>
          <div id='oscar' className='bg-cat oscar blend' onClick={onClick} > </div>
          <div id='goliath' className='bg-cat goliath blend' onClick={onClick} > </div>
        </div>
        <div className='cats-group-2'>
          <div id='dorothy' className='bg-cat dorothy blend' onClick={onClick} > </div>
          <div id='tom' className='bg-cat tom blend' onClick={onClick} > </div>
          <div id='romeo' className='bg-cat romeo blend' onClick={onClick} > </div>
        </div>
        <div className='cats-group-3'>
          <div className='bg-cat clickme'> </div>
          <div id='jerry' className='bg-cat jerry blend' onClick={onClick} > </div>
          <div id='tiffany' className='bg-cat tiffany blend' onClick={onClick} > </div>
          <div id='miko' className='bg-cat miko blend' onClick={onClick} > </div>
        </div>
      </div>
    );
  };

  CatPhotos.propTypes = {
    onClick: PropTypes.func.isRequired
  };

  export default CatPhotos;
