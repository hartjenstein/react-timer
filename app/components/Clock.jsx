let React = require('react');


let Clock = React.createClass({
  formatSeconds(totalSeconds){
      // grab the remainder thats left after dividing by sixty
    let seconds = totalSeconds % 60;
    let minutes;
  },    
render: function () {
    return (
      <div>
      </div>
    
    );
  }
});

module.exports = Clock;