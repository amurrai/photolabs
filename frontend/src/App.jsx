import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [modal, setModal] = useState('off') // Photo details modal switch

  const [favourites, setFavourites] = useState([]); // Favourites stored by id in array
  const switchFavourite = (id) => {
    favourites.includes(id) ?
    setFavourites(favourites.filter((value => {return value !== id}))) :
    setFavourites([...favourites, id])
  };
  const isFavPhotoExist = !!favourites.length; // Check for favourited photos passed to NavBar notification

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setModal={setModal} isFavPhotoExist={isFavPhotoExist} favourites={favourites} switchFavourite={switchFavourite}/>
      {modal !== 'off' && <PhotoDetailsModal modal={modal} setModal={setModal} isFavPhotoExist={isFavPhotoExist} favourites={favourites} switchFavourite={switchFavourite}/>}
    </div>
  );
};

export default App;
