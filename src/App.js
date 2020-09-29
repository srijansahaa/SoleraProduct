import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import Wall from './Components/Wall';

function App() {
  return (
    <div className="App">
      <h1 id="heading">Discover the product line</h1>
      <Navbar/>
      <Wall />
    </div>
  );
}

export default App;
