import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({photo, favourites, updateToFavPhotoIds}) {
  const handleClick = () => {
    updateToFavPhotoIds(photo.id)
  }
  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon  selected={favourites.includes(photo.id)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;