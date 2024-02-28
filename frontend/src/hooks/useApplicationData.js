import {useState} from 'react';

const useApplicationData = () => {
  const [state, setState] = useState({
    photoSelected: 'off',
    favourites: []
  });
  
  const updateToFavPhotoIds = (id) => {
    state.favourites.includes(id) ?
    setState({...state, favourites: state.favourites.filter((value => {return value !== id}))}) :
    setState({...state, favourites: [...state.favourites, id]})
  };

  const setPhotoSelected = (photo) => setState({...state, photoSelected: photo}) 

  const onClosePhotoDetailsModal = () => setPhotoSelected('off');


  return {state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal}
};

export default useApplicationData;