import React from "react";

import PhotoListItem from './PhotoListItem';

import "../styles/PhotoList.scss";

const PhotoList = ({photos, favourites, switchFavourite, setPhotoSelected}) => {
  return (
    <ul className="photo-list">
       {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} favourites={favourites} switchFavourite={switchFavourite} setPhotoSelected={setPhotoSelected}/>
       ))}       
    </ul>
  );
};

export default PhotoList;
