import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    state,
    setPhotoSelected,
    updateToFavPhotoIds: switchFavourite,
    onClosePhotoDetailsModal,
  } = useApplicationData();
  console.log(state);

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        setPhotoSelected={setPhotoSelected} 
        isFavPhotoExist={!!state.favourites.length} 
        favourites={state.favourites}
        switchFavourite={switchFavourite}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal} />
      {state.photoSelected !== 'off' && 
      <PhotoDetailsModal 
        photoSelected={state.photoSelected} 
        setPhotoSelected={setPhotoSelected} 
        onClosePhotoDetailsModal={onClosePhotoDetailsModal} 
        favourites={state.favourites} 
        switchFavourite={switchFavourite}/>}
    </div>
  );
};

export default App;
