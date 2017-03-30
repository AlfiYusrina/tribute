import React, {PropTypes} from 'react';

const CatsMobile = ({onClick}) => {
  return (
      <select className='1'>
        <option id='delilah' className='ded' onClick={onClick} > Delilah </option>
        <option id='lily' className='bd' onClick={onClick} > Lily </option>
        <option id='oscar' className='bgd' onClick={onClick} > Oscar </option>
        <option id='goliath' className='bgnd' onClick={onClick} > Goliath </option>
        <option id='dorothy' className='bld' onClick={onClick} > Dorothy </option>
        <option id='tom' className='bnd' onClick={onClick} > Tom </option>
        <option id='romeo' className='bgd' onClick={onClick} > Romeo </option>
        <option id='jerry' className='bgnd' onClick={onClick} > Jerry </option>
        <option id='tiffany' className='bg-cand' onClick={onClick} > Tiffany </option>
        <option id='miko' className='bg-nd' onClick={onClick} > Miko </option>
      </select>
  );
};

CatsMobile.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default CatsMobile;
