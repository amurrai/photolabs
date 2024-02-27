import React, { useEffect, useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';

const HomeRoute = ({photos, topics, setModal}) => {
  const [favourites, setFavourites] = useState([]);
  const switchFavourite = (id) => {
    favourites.includes(id) ?
    setFavourites(favourites.filter((value => {return value !== id}))) :
    setFavourites([...favourites, id])
  };
  const isFavPhotoExist = !!favourites.length;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={photos} favourites={favourites} switchFavourite={switchFavourite} setModal={setModal}/>
    </div>
  );
};

export default HomeRoute;
