import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import List from '../components/contents/Liste';
import MenuDemo from '../components/contents/Menu';
import Code from '../components/contents/Code';


export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid backg">

        <Row>
          <Col xs="3" sm="3">
            <MenuDemo />
          </Col>

          <Col xs="9" sm="9">
            <List />
            <Code />
          </Col>

        </Row>
      </div>


    );
  }
}