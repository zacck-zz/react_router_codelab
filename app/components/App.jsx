var React = require('react');
import {Link} from 'react-router';
//lets use navlink instead
import NavLink from 'NavLink';

var App = React.createClass({
    render: function() {
       return(
               <div>
                 <h1>App  Component</h1>
                 <ul role="nav">
                   {/*You can also use activeClassName when styling links*/}
                   <li><NavLink to="/about">About</NavLink></li>
                   <li><NavLink to="/main">Main</NavLink></li>
                 </ul>
                {/*Render children as prescribed in router*/}
                {this.props.children}
               </div>
             );
    }
});
module.exports =  App;
