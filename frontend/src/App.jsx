import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [modal, setModal] = useState('off')

  const [favourites, setFavourites] = useState([]);
  const switchFavourite = (id) => {
    favourites.includes(id) ?
    setFavourites(favourites.filter((value => {return value !== id}))) :
    setFavourites([...favourites, id])
  };
  const isFavPhotoExist = !!favourites.length;

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setModal={setModal} isFavPhotoExist={isFavPhotoExist} favourites={favourites} switchFavourite={switchFavourite}/>
      {modal !== 'off' && <PhotoDetailsModal modal={modal} setModal={setModal} isFavPhotoExist={isFavPhotoExist} favourites={favourites} switchFavourite={switchFavourite}/>}
    </div>
  );
};

export default App;
