import {useReducer, useEffect} from 'react';
import axios from 'axios';

// Action constants for reducer function
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS'
}

// Reducer function dispatch actions
const reducer = (state, action) => { 
  switch (action.type) {
    case 'FAV_PHOTO_ADDED':
      return {...state, favourites: [...state.favourites, action.payload]}
    case 'FAV_PHOTO_REMOVED':
      return {...state, favourites: state.favourites.filter((value => value !== action.payload))}
    case 'SET_PHOTO_DATA':
      return {...state, photoData: action.payload}
    case 'SET_TOPIC_DATA':
      return {...state, topicData: action.payload}
    case 'SELECT_PHOTO':
      return {...state, photoSelected: state.photoData.find(photo => photo.id === action.payload)}
    case 'CLOSE_PHOTO_DETAILS':
      return {...state, photoSelected: ''}
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const initialState = {
    photoSelected: '',
    favourites: [],
    photoData: [],
    topicData: []
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  
  // Fetch photo and topic data from API
  useEffect(() => {
    const photoPromise = axios.get('http://localhost:8001/api/photos');
    const topicPromise = axios.get('http://localhost:8001/api/topics');

    const promises = [photoPromise, topicPromise]

    Promise.all(promises)
      .then((resArr) => {
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: resArr[0].data
        })
        dispatch({
          type: ACTIONS.SET_TOPIC_DATA,
          payload: resArr[1].data
        })
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [])
  
  // Adds or removes photo to favourites
  const updateToFavPhotoIds = (id) => {
    state.favourites.includes(id) ?
    dispatch({
      type: ACTIONS.FAV_PHOTO_REMOVED,
      payload: id
    }) :
    dispatch({
      type:ACTIONS.FAV_PHOTO_ADDED,
      payload: id
    })
  };

  const setPhotoSelected = (id) => {
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: id
    })
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({
      type: ACTIONS.CLOSE_PHOTO_DETAILS,
      payload: ''
    })
  };

  const onLoadTopic = (id) => {
    id ?
      axios.get(`http://localhost:8001/api/topics/photos/${id}`)
      .then((res) => {
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: res.data
        })
      })
      .catch((error) => {
        console.error('Error:', error);
      }) :
      axios.get('http://localhost:8001/api/photos')
      .then((res) => {
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: res.data
        })
      })
      .catch((error) => {
        console.error('Error:', error);
      })
  }

  const displayFavourites = (favourites) => {
    const favPhotos = [];
    axios.get('http://localhost:8001/api/photos')
      .then((res) => {
        favourites.map((id) => {
          favPhotos.push(res.data.find(item => item.id === id));
        })
      })
      .then(() => {
        console.log(favPhotos);
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: favPhotos
        })
      })
      .catch((error) => {
        console.error('Error:', error);
      })

  }

  return {state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal, onLoadTopic, displayFavourites}
};

export default useApplicationData;