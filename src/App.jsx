import React from 'react';
import './App.css';
import Routeur from './components/Routeur';
import Navbar from './components/header/Navbar';
import MenuDemo from './components/contents/Menu';

function App() {
  return (
    <div className="layout-wrapper">
      <React.Fragment>

        <div className="layout-topbar">
          <Navbar />
        </div>

        <div className="layout-sidebar">
          <MenuDemo />
        </div>

        <div className="layout-content">
          <Routeur />
        </div>

      </React.Fragment>
    </div>
  );
}

export default App;
