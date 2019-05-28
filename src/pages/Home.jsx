import React, { Component } from 'react';
import '../App.css';
import List from '../components/contents/Liste';
import MenuDemo from '../components/contents/Menu';
import Code from '../components/contents/Code';


export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <React.Fragment>
      <div className="layout-sidebar">

            <MenuDemo />
            </div>
            
 <div className="layout-content">
            <List />
            <Code />
          
            </div>

</React.Fragment>

    );
  }
}