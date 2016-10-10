var React = require('react');
import {Link} from 'react-router';

var App = React.createClass({
    render: function() {
       return(
               <div>
                 <ul role="nav">
                   <li>
                     <Link to="/about">About</Link>
                   </li>
                   <li>
                     <Link to="/main">Main</Link>
                   </li>
                 </ul>
                <p>App  Component</p>
               </div>
             );
    }
});
module.exports =  App;
