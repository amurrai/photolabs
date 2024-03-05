import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    state,
    setPhotoSelected,
    updateToFavPhotoIds: updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    onLoadTopic
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
        updateToFavPhotoIds={updateToFavPhotoIds}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        onLoadTopic={onLoadTopic} />
      {state.photoSelected !== '' && 
      <PhotoDetailsModal 
        photoSelected={state.photoSelected} 
        setPhotoSelected={setPhotoSelected} 
        onClosePhotoDetailsModal={onClosePhotoDetailsModal} 
        favourites={state.favourites} 
        updateToFavPhotoIds={updateToFavPhotoIds}/>}
    </div>
  );
};

export default App;
