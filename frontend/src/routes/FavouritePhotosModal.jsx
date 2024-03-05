import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({favourites, updateToFavPhotoIds, onClosePhotoDetailsModal}) => {
  const handleClick = () => {
    onClosePhotoDetailsModal() // Function for close button on modal
  }

  return (
    <div className='photo-details-modal'>
      <button onClick={handleClick} className='photo-details-modal__close-button'>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoList photos={Object.values(photoSelected.similar_photos)} favourites={favourites} updateToFavPhotoIds={updateToFavPhotoIds} setPhotoSelected={setPhotoSelected}/>
    </div>
  )
};

export default PhotoDetailsModal;
