import React, {PropTypes} from 'react';

const DetailResto = ({
  title,
  text,
  link,
  img
}) => {

  return (
      <div className='fav-restos-detail'>
      <img className='fav-restos-img' src={img} alt={title} title={title} />
      <header className='fav-restos-card'>
        <h1 className='fav-restos-card-name'><a className='fav-restos-card-link' href={link}>{title}</a></h1>
      </header>
      <p className='fav-restos-card-text'>{text}</p>
      </div>
  );

};
DetailResto.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};
export default DetailResto;
