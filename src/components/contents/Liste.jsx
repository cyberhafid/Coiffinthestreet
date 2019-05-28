import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

const List = (props) => {
  return (
    <div>

<div className="content-section introduction">
  <div className="feature-intro">
    <h1>Menu</h1>
    <p>Menu is a navigation/command component that supports dynamic and static positioning.</p>
    </div>
    </div>




  <h3>ADMINISTRATION  </h3>
      <Card>
        <CardHeader className="bg-info" tag="h3">Featured</CardHeader>
        <CardBody>
          <CardTitle > Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
         
       
        </CardBody>
  
      </Card>

     
    </div>
  );
};

export default List;