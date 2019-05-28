import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './../../App.css';

export default class Menu extends React.Component {
  render() {
    return (
      <div>
     
     <h3>Tableau de Bord </h3>
        <ListGroup>
          <ListGroupItem className="bg-info" active tag="a" href="#" action> General</ListGroupItem>
          <ListGroupItem tag="button" > <NavLink  to="/maraude"> MARAUDE </NavLink></ListGroupItem>
          <ListGroupItem tag="button" > <NavLink  to="/maraude"> Utilisateurs </NavLink></ListGroupItem>
          <ListGroupItem tag="button" > <NavLink  to="/maraude"> participants </NavLink></ListGroupItem>
          <ListGroupItem tag="button" > <NavLink  to="/maraude"> Utilisateurs </NavLink></ListGroupItem>
           </ListGroup>



        <ListGroup>
          <ListGroupItem className="bg-info" active tag="button" action>Administrateur</ListGroupItem>
          <ListGroupItem tag="button" action><NavLink  to="/api"> API </NavLink></ListGroupItem>
          <ListGroupItem tag="button" action>Outils</ListGroupItem>
          <ListGroupItem tag="button" action>Mot de passe</ListGroupItem>
 
        </ListGroup>

      </div>
    );
  }
}