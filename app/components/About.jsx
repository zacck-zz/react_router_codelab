import React from 'react';
import NavLink from 'NavLink';
export default React.createClass({
    render: function() {
       return(
               <div>
                <p>About  Component</p>
                <ul>
                  <li><NavLink to="/about/reactjs/react-router">React Router</NavLink></li>
                  <li><NavLink to="/about/facebook/react"> React</NavLink></li>
                </ul>
                {this.props.children}
               </div>
             );
    }
});
