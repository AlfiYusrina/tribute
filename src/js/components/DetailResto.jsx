import React, {PropTypes} from 'react';

const DetailResto = ({
  title,
  text,
  link
}) => {

  return (
      <div className='fav-resto-detail'>
      <header className='fav-restos-card'>
        <h1 className='fav-restos-card-name'><a className='fav-restos-card-link' href={link}>{title}</a></h1>
      </header>
      <p className='section-text fav-restos-card-text'>{text}</p>
      </div>
  );

};
DetailResto.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
export default DetailResto;
