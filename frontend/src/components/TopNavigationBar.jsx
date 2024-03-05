import React from 'react';

import TopicList from 'components/TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({topics, isFavPhotoExist, onLoadTopic, favourites, displayFavourites}) => {
  const handleClick = () => onLoadTopic();

  return (
    <div className="top-nav-bar">
      <span onClick={handleClick} className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onLoadTopic={onLoadTopic}/>
      <FavBadge favourites={favourites} displayFavourites={displayFavourites} isFavPhotoExist={isFavPhotoExist}/>
    </div>
  )
}

export default TopNavigation;