import React, {PropTypes} from 'react';

const Clock = ({time, timeString}) => {
  const style = {
    rotate: `${360 / 12 * time  + 90}deg`
  };

  return (
    <div>
    <img className='clock' src='assets/img/pointerClock1.png' alt={timeString} title={timeString} style={style} />
    <img className='xmas-dining-img-insider' src={`assets/img/pickmeNoPointer.png`} alt={timeString} title={timeString} />
    </div>
  );
};

Clock.propTypes = {
  timeString: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired
};
export default Clock;
