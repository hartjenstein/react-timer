let React = require('react');


let Clock = React.createClass({
  formatSeconds(totalSeconds){
      // grab the remainder thats left after dividing by sixty
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);  

    if(seconds < 10) {
      seconds = '0' + seconds;
    }
    if(minutes < 10) {
      minutes = '0' + minutes;
    } 
    return minutes + ':' + seconds; 
  },    
render: function () {
  let {totalSeconds} = this.props;  
    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>

      </div>
    
    );
  }
});

module.exports = Clock;