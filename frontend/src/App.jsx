import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  const [modal, setModal] = useState('off')

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setModal={setModal}/>
      {modal !== 'off' && <PhotoDetailsModal modal={modal} setModal={setModal} />}
    </div>
  );
};

export default App;
