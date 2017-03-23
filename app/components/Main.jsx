import React from 'react';
import {Nav} from 'Nav';

class Main extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <Nav/>
           <p>Main.jsx rendered</p> 
           {props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
