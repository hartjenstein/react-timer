// let React = require('react');
import React from 'react';
export class Clock extends React.Component {
 /* getDefaultProps: function () {
    totalSeconds: 0
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  }*/
  formatSeconds(totalSeconds) {
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return minutes + ':' + seconds;
  }
  render() {
    // pulling of totalSeconds of props object via object destructuring { totalSeconds }
    let { totalSeconds } = this.props;
    return (
      <div className="clock">
        <span className="clock-text ">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
};

Clock.defaultProps = {
  totalSeconds: 0
};
Clock.propTypes = {
    totalSeconds: React.PropTypes.number
};
