import React, {PropTypes} from 'react';

const ToastIcon = ({active, onClick}) => {
  let className = ``;
  if (active) {

    className = `active`;
  }
  return (
      <g id='toast' onClick={onClick} className={`map-resto-icon ${  className}`}>
      <path className='st0' d='M146.1,390.2c-5.9,0-11,3.5-13.2,8.6c-2.6-2.9-6.4-4.8-10.7-4.8c-7.9,0-14.4,6.4-14.4,14.4
c0,4.5,2.1,8.6,5.4,11.2v20.9c0,3.9,3.2,7.1,7.1,7.1h29c3.9,0,7.1-3.2,7.1-7.1v-25.9c2.5-2.6,4-6.1,4-10
C160.5,396.6,154.1,390.2,146.1,390.2z M121.1,440.5c0,0.5-0.4,0.9-0.9,0.9s-0.9-0.4-0.9-0.9V435c0-0.5,0.4-0.9,0.9-0.9
s0.9,0.4,0.9,0.9V440.5z M121.1,427.2c0,0.5-0.4,0.9-0.9,0.9s-0.9-0.4-0.9-0.9v-22.8c0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9V427.2z
 M126.4,438.6c0,0.5-0.4,0.9-0.9,0.9s-0.9-0.4-0.9-0.9v-18.9c0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9V438.6z M126.4,411.9
c0,0.5-0.4,0.9-0.9,0.9s-0.9-0.4-0.9-0.9v-9.7c0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9V411.9z' />
      </g>
  );
};
ToastIcon.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
export default ToastIcon;
