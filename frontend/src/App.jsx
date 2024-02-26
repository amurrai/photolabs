import React from 'react';

import PhotoList from 'components/PhotoList';
import './App.scss';
import TopicListItem from 'components/TopicListItem';
import TopicList from 'components/TopicList';

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
      {/* <PhotoList /> */}
      <TopicList />
    </div>
  );
};

export default App;
