import React from 'react';
import {Nav} from 'Nav';

export class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav/>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            
           <p>Main.jsx rendered</p> 
           {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}


