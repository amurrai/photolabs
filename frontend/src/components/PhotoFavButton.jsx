import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({photo, favourites, switchFavourite}) {
  // const [selected, setSelected] = useState(false);
  const handleClick = () => {
    switchFavourite(photo.id)
  }
  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon  selected={favourites[photo.id]}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;