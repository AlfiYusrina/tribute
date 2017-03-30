  import React, {PropTypes} from 'react';

  const CatPhotos = ({value, onClick}) => {

    return (
      <div className='cats-photos cats-allcats'>
        <div className='cats-group-1'>
          <div id='delilah' className={`${value === `delilah` ? `blendactive` : ``} bg-cat delilah blend`} onClick={onClick} > </div>
          <div id='lily' className={`bg-cat lily blend ${value === `lily` ? `blendactive ` : ``}`} onClick={onClick} > </div>
          <div id='oscar' className={`bg-cat oscar blend ${value === `oscar` ? `blendactive ` : ``}`} onClick={onClick} > </div>
          <div id='goliath' className={`bg-cat goliath blend ${value === `goliath` ? `blendactive ` : ``}`} onClick={onClick} > </div>
        </div>
        <div className='cats-group-2'>
          <div id='dorothy' className={`bg-cat dorothy blend ${value === `dorothy` ? `blendactive ` : ``}`} onClick={onClick} > </div>
          <div id='tom' className={`bg-cat tom blend ${value === `tom` ? `blendactive ` : ``}`} onClick={onClick} > </div>
          <div id='romeo' className={`bg-cat romeo blend ${value === `romeo` ? `blendactive ` : ``}`} onClick={onClick} > </div>
        </div>
        <div className='cats-group-3'>
          <div className='bg-cat clickme'> </div>
          <div id='jerry' className={`bg-cat jerry blend ${value === `jerry` ? `blendactive ` : ``}`} onClick={onClick} > </div>
          <div id='tiffany' className={`bg-cat tiffany blend ${value === `tiffany` ? `blendactive ` : ``}`} onClick={onClick} > </div>
          <div id='miko' className={`bg-cat miko blend ${value === `miko` ? `blendactive ` : ``}`} onClick={onClick} > </div>
        </div>
      </div>
    );
  };

  CatPhotos.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  export default CatPhotos;
