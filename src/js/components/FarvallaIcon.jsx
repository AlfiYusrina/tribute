import React, {PropTypes} from 'react';

const FarvallaIcon = ({active, onClick}) => {
  let className = ``;
  if (active) {
    className = `active`;
  }
  return (
       <g id='farvala' onClick={onClick} className={`map-resto-icon ${  className}`}><g><path className='st0' d='M134.2,107.2c-0.5-2.3-3,0.4-3.6-2.7c-0.7-3.1,3.3-2.4,2.3-4.1c-0.9-1.7-4-0.3-4.5-1.6
          c-0.5-1.2,3-3.2,1.9-4.9c-1.2-1.7-3.8,0.9-4.9-0.3c-1.1-1.1,2.3-4.1,1.1-5.2c-1.1-1.1-4.4,1.1-5.2,0.4c-0.8-0.7,2.5-4.6,0.4-5.8
          c-2.1-1.2-4.8,1.4-7.1,3.5c-2.3,2-6.3,6.9-9.1,12.2c-2.8,5.3-5.5,6.8-6.5,6.9c-1.1,0.1-3.9-0.1-6.1-2.9
          C86.5,95,74.9,91.1,72.8,91.2c0,0-1.5-0.1-2.5,2.6c-0.9,2.7,3.4,3.2,3.3,4.8c-0.1,1.6-5.4-0.7-5.8,1c-0.3,1.8,2.6,3.2,2.1,5.5
          c-0.4,2.3-3.5-0.3-3.7,1.6c-0.1,1.9,2.3,1.9,2.6,3.4c0.3,1.5-4,1.8-3.7,3.4c0.3,1.6,4.1,2.2,4.4,3.7s-3.4,2-3.1,3.5
          c0.3,1.5,3.9,1.6,4.4,3.1c0.4,1.4-2.6,1.7-1.9,3.6c0.7,1.9,4.6,1,5.2,2.3c0.6,1.3-1.9,1.9-1,3.4c0.9,1.5,4.2-1.1,5.1,0.2
          s-2.8,2.9-1.2,4.8c1.6,2,6.7,0.7,13.5-5.5c6.8-6.2,7.4-13.4,11.6-14.9c4.2-1.5,5,3.9,11.3,8.4c6.3,4.5,16.9,4.3,17.8,2.1
          c0.8-2.2-2.1-3.2-2.3-4.3c-0.2-1.1,4.1-0.4,4.1-2.8c0-2.5-2.3-0.5-2.3-2.8c0-2.3,3.6-1.5,3.2-3.5c-0.4-2-2.5-1.3-2.9-3.6
          C130.7,108.9,134.8,109.4,134.2,107.2z M82,118.8c-0.6-3.7,6.9-5.1,13.9-3.8C93.8,118.6,82.5,122.5,82,118.8z M82.9,106.4
          c0.5-3.1,8.2,0.7,12,3.8C87.4,107.9,82.4,109.5,82.9,106.4z M114.4,101.5c1.5,2.7-3.7,3-9.9,7.7C107,105,112.8,98.8,114.4,101.5z
          M119.4,115.6c-0.7,3.6-11.8-0.5-13.8-4.1C112.6,110.3,120.1,112,119.4,115.6z' /></g>
        </g>
  );
};
FarvallaIcon.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
export default FarvallaIcon;
