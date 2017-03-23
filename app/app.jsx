let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');
let Main = require('Main');
let Countdown = require('Countdown');
let Timer = require('Timer');

// load foundation
//using style and css loader chained together (style!css!)
require ('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={ Main }>
       <Route path="/countdown" component={ Countdown }/>

       <IndexRoute component={ Timer } />
    </Route>
  </Router>,
  document.getElementById('app')
);
