import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    state,
    setPhotoSelected,
    updateToFavPhotoIds: switchFavourite,
    onClosePhotoDetailsModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        photos={state.photoData} 
        topics={state.topicData} 
        photoSelected={state.photoSelected} 
        setPhotoSelected={setPhotoSelected} 
        isFavPhotoExist={!!state.favourites.length} 
        favourites={state.favourites}
        switchFavourite={switchFavourite}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal} />
      {state.photoSelected !== '' && 
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
