import React, {PropTypes} from 'react';

const XmasDiningDetail = ({title, text, img, time}) => {
  return (
    <div className='xmas-dining-detail'>
      <div className='xmas-dining-detail-texts'>
        <header className='xmas-dining-detail-header'>
          <h1 className='xmas-dining-detail-title'>{title}</h1>
        </header>
        <p className='section-text xmas-dining-detail-text'>{text}</p>
      </div>
      <div className='xmas-dining-detail-img-container'>
        <img className='xmas-dining-detail-img' src={img} alt={title} title={title} />
        <span className='xmas-dining-detail-time'>{time}</span>
      </div>
    </div>
  );
};

XmasDiningDetail.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};
export default XmasDiningDetail;
