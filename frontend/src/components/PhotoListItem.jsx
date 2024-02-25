import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = ({data}) => {

  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={data.imageSource} />
      <img className="photo-list__user-profile" src={data.profile} />
      <div className="photo-list__user-details">
        <span className="photo-list__user-info">{data.username}</span>
        <span className="photo-list__user-location">{data.location.city}, {data.location.country}</span>
      </div>
    </div>
  )
};

export default PhotoListItem;
