import React from 'react';
import './App.css';
import Routeur from './components/Routeur';
import Navbar from './components/header/Navbar';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar />
        <Routeur />
      </React.Fragment>
    </div>
  );
}

export default App;
