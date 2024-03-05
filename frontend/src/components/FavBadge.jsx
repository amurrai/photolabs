import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, displayFavourites, favourites }) => {
  const handleClick = () => {
    if(isFavPhotoExist) displayFavourites(favourites);
  }
  return (
    <div onClick={handleClick} className='fav-badge'>
      <FavIcon displayAlert={isFavPhotoExist} selected={isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;