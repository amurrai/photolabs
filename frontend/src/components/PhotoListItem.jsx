import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({photo, favourites, updateToFavPhotoIds, setPhotoSelected, photoSelected}) => {
  const handleClick = () => {
    setPhotoSelected(photo.id)
  };
  return (
    <div className="photo-list__item">
      <PhotoFavButton photo={photo} favourites={favourites} updateToFavPhotoIds={updateToFavPhotoIds}/>
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
