let React = require('react');
let { Link, IndexLink } = require('react-router');

let Nav = () => {
    return (
        <div className="top-bar">
           <div className="top-bar-left">
               <ul className="menu">
                   <li className="menu-text">
                       React Timer App
                   </li>
                   <li>
                       <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                   </li>
                   <li>
                       <Link to="/countdown" activeClassName="active-link">Countdown</Link>
                   </li>

               </ul>
           </div> 
           <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created by <a href="https://github.com/hartjenstein" target="_blank"> Hartjenstein</a>
                     </li>
                </ul>
           </div>
        </div>
    );
};  

module.exports = Nav;