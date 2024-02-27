import React, { useEffect, useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';

const HomeRoute = ({photos, topics, setModal, isFavPhotoExist, favourites, switchFavourite}) => {
  

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={photos} favourites={favourites} switchFavourite={switchFavourite} setModal={setModal}/>
    </div>
  );
};

export default HomeRoute;
