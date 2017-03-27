import React from 'react';
import {Clock} from 'Clock';
import {CountdownForm} from 'CountdownForm';
import {Controls} from 'Controls';

export class Countdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    };
  }
  componentDidUpdate(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch(this.state.countdownStatus) {
        case 'started': 
        this.startTimer();
        break;  
        // since we are not using break on the second case,
        // it will fire for both stopped and paused
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  }
  startTimer() {
    this.timer = setInterval(() => {
      let newCount = this.state.count -1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  }
  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  }

  handleStatusChange(newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  }
  render() {
    let {count, countdownStatus} = this.state;

    let renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange.bind(this)}/>;
      } else {
        <CountdownForm onSetCountdown={this.handleSetCountdown.bind(this)}/>;
      } 
    };
    return (
      <div>
        <Clock totalSeconds={this.state.count}/> 
        {renderControlArea()}
      </div>
    
    );
  }
}

