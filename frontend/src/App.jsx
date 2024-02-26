import React from 'react';

import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicListItem from 'components/TopicListItem';

import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';

// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

const App = () => {
  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
};

export default App;
