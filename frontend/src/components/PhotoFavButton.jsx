import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(selected ? false : true)
  }
  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon  selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;