import React from "react";

import PhotoListItem from './PhotoListItem';

import "../styles/PhotoList.scss";

const PhotoList = ({photos, favourites, switchFavourite, setModal}) => {
  return (
    <ul className="photo-list">
       {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} favourites={favourites} switchFavourite={switchFavourite} setModal={setModal}/>
       ))}       
    </ul>
  );
};

export default PhotoList;
