import React, { useEffect, useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({photos, topics, setPhotoSelected, isFavPhotoExist, favourites, switchFavourite, photoSelected, onLoadTopic}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist} onLoadTopic={onLoadTopic}/>
      <PhotoList photos={photos} favourites={favourites} switchFavourite={switchFavourite} setPhotoSelected={setPhotoSelected} photoSelected={photoSelected} />
    </div>
  );
};

export default HomeRoute;
