import React, {PropTypes} from 'react';

const DetailCat = ({name, text}) => {
  return (
    <article className='cats-profile'>
      <header className='cats-profile-header'>
        <img src='assets/img/paws.png' alt='cat paws' className='cats-paws' />
        <video src={`assets/video/${name}.mp4`} autoPlay loop className='cats-video'>
        </video>
        <h1 className='cats-meet'>Meet {name}</h1>
      </header>
      <p className='cats-detail-text' dangerouslySetInnerHTML={{__html: text}}>
      </p>
    </article>
  );
};

DetailCat.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default DetailCat;
