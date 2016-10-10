var React = require('react');
import {Link} from 'react-router';

var App = React.createClass({
    render: function() {
       return(
               <div>
                 <h1>App  Component</h1>
                 <ul role="nav">
                   <li><Link to="/about">About</Link></li>
                   <li><Link to="/main">Main</Link></li>
                 </ul>
                {/*Render children as prescribed in router*/}
                {this.props.children}
               </div>
             );
    }
});
module.exports =  App;
