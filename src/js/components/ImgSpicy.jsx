import React, {PropTypes} from 'react';

const ImgSpicy = ({img, onClick}) => {
  return (
    <img src={img} onClick={onClick} alt='freddie eating a pepper' title='freddie eating a pepper' className='hot-spicy-img' />
  );
};

ImgSpicy.propTypes = {
  img: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
export default ImgSpicy;
