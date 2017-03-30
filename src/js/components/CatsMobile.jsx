import React, {PropTypes} from 'react';

const CatsMobile = ({value, onChange}) => {
  return (
      <select value={value} onChange={onChange} className='selectCat'>
        <option value='delilah' className='cat-option' > Delilah </option>
        <option value='lily' className='cat-option' > Lily </option>
        <option value='oscar' className='cat-option' > Oscar </option>
        <option value='goliath' className='cat-option' > Goliath </option>
        <option value='dorothy' className='cat-option' > Dorothy </option>
        <option value='tom' className='cat-option' > Tom </option>
        <option value='romeo' className='cat-option' > Romeo </option>
        <option value='jerry' className='cat-option' > Jerry </option>
        <option value='tiffany' className='cat-option' > Tiffany </option>
        <option value='miko' className='cat-option' > Miko </option>
      </select>
  );
};

CatsMobile.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default CatsMobile;
