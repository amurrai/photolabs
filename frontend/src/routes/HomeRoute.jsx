import React, { useEffect, useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';

const HomeRoute = ({photos, topics}) => {
  const [favourites, setFavourites] = useState([]);
  const switchFavourite = (id) => {
    favourites.includes(id) ?
    setFavourites(favourites.filter((value => {return value !== id}))) :
    setFavourites([...favourites, id])
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favourites={favourites}/>
      <PhotoList photos={photos} favourites={favourites} switchFavourite={switchFavourite}/>
    </div>
  );
};

export default HomeRoute;
