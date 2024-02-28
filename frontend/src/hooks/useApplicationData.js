import {useState} from 'react';

const useApplicationData = () => {
  const [favourites, setFavourites] = useState([]); // Favourites stored by id in array
  
  const updateToFavPhotoIds = (id) => {
    favourites.includes(id) ?
    setFavourites(favourites.filter((value => {return value !== id}))) :
    setFavourites([...favourites, id])
  };

  const [photoSelected, setPhotoSelected] = useState('off');
  const onClosePhotoDetailsModal = () => setPhotoSelected('off');
  const state = {photoSelected, favourites}

  return {state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal}
};

export default useApplicationData;