import React, {PropTypes} from 'react';

const ChickenIcon = ({active, onClick}) => {
  let className = ``;
  if (active) {
    className = `active`;
  }
  return (
      <g id='chicken' onClick={onClick} className={`map-resto-icon ${  className}`}>
        <path className='st0' d='M258.1,435.6c0.1-1.2-0.4-2.5-1.4-3.4c-1.7-1.6-4.4-1.4-6,0.3c-1.6,1.7-1.4,4.4,0.3,6c0.3,0.3,0.6,0.5,0.9,0.6
        l-11.8,13.1c-7.6-4-19-0.6-27.1,8.4c-9.1,10.2-10.6,23.7-3.3,30.3c7.3,6.5,20.6,3.6,29.7-6.6c8.2-9.1,10.2-20.9,5.3-28l11.7-13
        c1.7,1.1,4,0.8,5.4-0.8c1.6-1.7,1.4-4.4-0.3-6C260.7,435.7,259.4,435.4,258.1,435.6z M220.1,490.5c-0.6,0.7-1.7,0.7-2.5,0
        c-0.8-0.7-0.9-1.8-0.3-2.4c0.6-0.7,1.7-0.7,2.5,0C220.6,488.7,220.7,489.8,220.1,490.5z M225.5,490.4c-0.6,0.6-1.6,0.6-2.3,0
        c-0.7-0.6-0.8-1.7-0.3-2.3c0.6-0.6,1.6-0.6,2.3,0S226.1,489.8,225.5,490.4z M222.4,485.2c-0.6,0.6-1.6,0.6-2.3,0
        c-0.7-0.6-0.8-1.7-0.3-2.3c0.6-0.6,1.6-0.6,2.3,0C222.8,483.6,223,484.6,222.4,485.2z' />
      </g>
  );
};
ChickenIcon.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
export default ChickenIcon;
