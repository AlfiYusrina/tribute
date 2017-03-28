import React, {PropTypes} from 'react';
const SliderLabel = ({value}) => {
  return (
    <span className='slider-label'> {value}</span>
  );
};

SliderLabel.propTypes = {
  value: PropTypes.string.isRequired
};

export default SliderLabel;
