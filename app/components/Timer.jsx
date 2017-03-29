import React from 'react';
import {Clock} from 'Clock';
import {CountdownForm} from 'CountdownForm';
import {Controls} from 'Controls';

export class Timer extends React.Component { 
  
 constructor(props){
    super(props);
    this.state = {
      count: 0,
      timerStatus: 'stopped',
      endCount: 0
    };
  }
 componentDidUpdate(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  }
  componentWillUnmount(){
     clearInterval(this.timer);
          this.timer = undefined;
  }
  startTimer() {
    this.timer = setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if(newCount === 0) {
        this.setState({
          timerStatus: 'stopped'
        });
      } else if (newCount === this.state.endCount){
        this.setState({
          timerStatus: 'stopped'
        });
      }
    }, 1000);
  }
  handleSetCountdown(seconds) {
    this.setState({
      count: 0,
      timerStatus: 'started',
    });
  }
  handleStatusChange(newStatus) {
    this.setState({
      timerStatus: newStatus
    });
  }

  render() {
    //let {endCount} = this.props;
    let {count, timerStatus} = this.state;
   

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange.bind(this)}/>
      </div>
    );
  }
}


