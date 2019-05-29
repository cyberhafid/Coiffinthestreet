
import React, { Component } from 'react';
import { Panel } from 'primereact/panel';

export default class Api extends Component {
  render() {
    return (
      <div>
        <div className="content-section introduction">
          <div className="feature-intro">
            <h1>Panel</h1>
            <p>Panel is a grouping component providing with content toggle feature.</p>
          </div>
        </div>

        <div className="content-section implementation">
          <Panel header="users/">

            <div>
              <h3 class="mt-5">POST</h3>
              <p>IAjouter un utilisateur</p>

              <pre class="language-bash">
                <code class="language-bash">
                  <span class="token function">npm</span>
                  <span class="token function">GOO</span>
                  users/ </code>
              </pre>
            </div>

            <div>
              <h3 class="mt-5">GET users/:id</h3>
              <p>IAjouter un utilisateur</p>

              <pre class="language-bash">
                <code class="language-bash">
                  <span class="token function">npm</span>
                  <span class="token function">GOO</span>
                  users/ </code>
              </pre>
            </div>

          </Panel>

        </div>
      </div>
    )
  }
}


