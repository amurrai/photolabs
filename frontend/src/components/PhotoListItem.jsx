import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({data}) => {

  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={data.imageSource} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={data.profile} />
        <div className="photo-list__user-info">
          <span> {data.username} </span> <br />
          <span className="photo-list__user-location">{data.location.city}, {data.location.country}</span>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
