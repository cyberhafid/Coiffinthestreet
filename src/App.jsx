import React from 'react';
import './App.css';
import Routeur from './components/Routeur';
import Navbar from './components/header/Navbar';

function App() {
  return (
    <div className="layout-wrapper">
      <React.Fragment>
      <div className="layout-topbar">
        <Navbar />
        </div>


        <Routeur />
      </React.Fragment>
    </div>
  );
}

export default App;
