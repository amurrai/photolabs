import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({photoSelected, setPhotoSelected, favourites, switchFavourite, onClosePhotoDetailsModal}) => {
  const handleClick = () => {
    onClosePhotoDetailsModal() // Function for close button on modal
  }

  return (
    <div className='photo-details-modal'>
      <button onClick={handleClick} className='photo-details-modal__close-button'>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoFavButton photo={photoSelected} favourites={favourites} switchFavourite={switchFavourite}/>
      <img className='photo-details-modal__image' src={photoSelected.urls.full} />
      <div className='photo-details-modal__photographer-details'>
        <img className='photo-details-modal__photographer-profile' src={photoSelected.user.profile} />
        <div className='photo-details-modal__photographer-info'>
          <span className='photo-details-modal__photographer-detail'> {photoSelected.user.name} </span> <br />
          <span className='photo-details-modal__photographer-location'>{photoSelected.location.city}, {photoSelected.location.country}</span>
        </div>
      </div>
      <h1 className='photo-details-modal__header'>Similar Photos</h1>
      <PhotoList photos={Object.values(photoSelected.similar_photos)} favourites={favourites} switchFavourite={switchFavourite} setPhotoSelected={setPhotoSelected}/>
    </div>
  )
};

export default PhotoDetailsModal;
