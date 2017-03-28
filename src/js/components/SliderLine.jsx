import React, {PropTypes} from 'react';
const {number, string, func} = PropTypes;
import SliderLabel from './SliderLabel';

const SliderLine = ({value, onChangeT, channel}) => {

  const handleChangeSlider = e => {
    const {value} = e.currentTarget;
    onChangeT(parseInt(value), channel);
  };

  return (
    <article className='slider'>
      <input className='slider-range' type='range'
      onChange={handleChangeSlider}
      value={value} max='24' />
      <SliderLabel value={`${value}`} />
    </article>
  );
};
SliderLine.propTypes = {
  value: number.isRequired,
  channel: string.isRequired,
  onChangeT: func.isRequired
};
export default SliderLine;
