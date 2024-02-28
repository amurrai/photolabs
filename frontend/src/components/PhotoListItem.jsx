import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({photo, favourites, switchFavourite, setPhotoSelected}) => {
  const handleClick = () => {
    setPhotoSelected('off')
    setPhotoSelected(photo) // Function to switch modal to clicked photo
    console.log(photo);
  };
  return (
    <div className="photo-list__item">
      <PhotoFavButton photo={photo} favourites={favourites} switchFavourite={switchFavourite}/>
      <img onClick={handleClick} className="photo-list__image" src={photo.urls.regular} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} />
        <div className="photo-list__user-info">
          <span> {photo.user.name} </span> <br />
          <span className="photo-list__user-location">{photo.location.city}, {photo.location.country}</span>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
