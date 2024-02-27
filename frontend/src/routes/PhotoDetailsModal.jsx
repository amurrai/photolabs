import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({modal, setModal, favourites, switchFavourite}) => {
  const handleClick = () => {
    setModal('off')
  }

  return (
    <div className='photo-details-modal'>
      <div className='photo-details-modal__top-bar'>
      <button onClick={handleClick} className='photo-details-modal__close-button'>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      </div>
        <PhotoFavButton photo={modal} favourites={favourites} switchFavourite={switchFavourite}/>
        <img className='photo-details-modal__images photo-details-modal__image' src={modal.urls.full} />
      <div className='photo-details-modal__photographer-details'>
        <img className='photo-details-modal__photographer-profile' src={modal.user.profile} />
        <div className='photo-details-modal__photographer-info'>
          <span className='photo-details-modal__photographer-detail'> {modal.user.name} </span> <br />
          <span className='photo-details-modal__photographer-location'>{modal.location.city}, {modal.location.country}</span>
        </div>
      </div>
      <h2 className='photo-details-modal__header'>Similar Photos</h2>
      <PhotoList photos={Object.values(modal.similar_photos)} favourites={favourites} switchFavourite={switchFavourite} setModal={setModal}/>
    </div>
  )
};

export default PhotoDetailsModal;
