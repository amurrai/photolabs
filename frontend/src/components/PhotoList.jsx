import React from "react";

import PhotoListItem from './PhotoListItem';

import "../styles/PhotoList.scss";

const PhotoList = ({photos, favourites, updateToFavPhotoIds, setPhotoSelected, photoSelected}) => {
  return (
    <ul className="photo-list">
       {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} favourites={favourites} updateToFavPhotoIds={updateToFavPhotoIds} setPhotoSelected={setPhotoSelected} photoSelected={photoSelected}/>
       ))}       
    </ul>
  );
};

export default PhotoList;
