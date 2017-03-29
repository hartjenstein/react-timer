import React from 'react';

export class Controls extends React.Component {

    // using currying(a function which returns a function) to define the new status right in the function call, in the onClick handler.
    // no need to have 3 separate functions for each click event.
  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  }
  componentWillReceiveProps(newProps){
    console.log('componentWillReceiveProps', newProps.countdownStatus);
  }
  render() {
    let {countdownStatus} = this.props;
    let renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('paused').bind(this)}>Pause</button>;
      } else {
        return <button className="button primary" onClick={this.onStatusChange('started').bind(this)}>Start</button>;
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped').bind(this)}>Clear</button>
      </div>
    );
  }
}

Controls.propTypes = {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
    
};
