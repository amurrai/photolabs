import React, { useEffect, useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';

const HomeRoute = ({photos, topics}) => {
  const [favourites, setFavourites] = useState({});
  const switchFavourite = (id) => {
    setFavourites({
      ...favourites,
      [id]: !favourites[id]})
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList photos={photos} favourites={favourites} switchFavourite={switchFavourite}/>
    </div>
  );
};

export default HomeRoute;
