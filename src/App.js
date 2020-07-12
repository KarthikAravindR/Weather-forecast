import React from 'react';

import Weatherapp from './containers/Weatherapp/Weatherapp'
import Newanimation from './components/UI/Newanimation/Newanimation'
import './App.css';

function App() {

  return (
    <div>
      <div>
        <Newanimation />
      </div>
    <Weatherapp />
    </div >
  );
}



export default App;
