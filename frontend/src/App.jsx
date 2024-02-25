import React from 'react';

import PhotoList from 'components/PhotoList';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const photos = new Array(3);

const App = () => {
  return (
    <div className="App">
      <PhotoList data={sampleDataForPhotoListItem} />
    </div>
  );
};

export default App;
