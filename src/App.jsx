import React from 'react';
import './App.css';
import Routeur from './components/Routeur';
import Navbar from './components/header/Navbar';
import MenuDemo from './components/contents/Menu';

function App() {
  return (
    <React.Fragment>
    <div className="App">
    <div className="layout-wrapper">
  
 
        <div className="layout-topbar">
     
        </div>

        <div className="layout-sidebar">
          <MenuDemo />
        </div>

        <div className="layout-content">
          <Routeur />
        </div>
        </div>
  
    </div>
    </React.Fragment>
  );
}

export default App;
