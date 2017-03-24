import React from 'react';
import {Clock} from 'Clock';
import {CountdownForm} from 'CountdownForm';

export class Countdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  }
  
  handleSetCountdown(seconds) {
    this.setState({
      count: seconds
    });
  }
  
  render() {
    let {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={this.state.count}/> 
        <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)}/>
      </div>
    
    );
  }
}

