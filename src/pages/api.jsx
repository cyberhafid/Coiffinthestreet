import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Code from '../components/contents/Code';



export default class Api extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid backg">
       <Code />
       <div>
      <h3 class="mt-5">Deuxieme partie</h3>
      <p>Install reactstrap and peer dependencies via NPM</p>

      <pre class="language-bash">
      <code class="language-bash">
      <span class="token function">npm</span>
       <span class="token function">install</span> 
       --save reactstrap react react-dom</code>
       </pre>
    </div>

  
  
       
      </div>
    );
  }
}