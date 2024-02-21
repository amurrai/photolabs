import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const data = props.data
  return (
    <>
      <img src={data.imageSource} />
      <img src={data.profile} />
      <p>{data.username}</p>
      <p>{data.location.city}, {data.location.country}</p>
    </>
  )
};

export default PhotoListItem;
