import React from 'react';
import {Link} from 'react-router'
export default React.createClass({
    render: function() {
       return(
               <div>
                <p>About  Component</p>
                <ul>
                  <li><Link to="/about/reactjs/react-router">React Router</Link></li>
                  <li><Link to="/about/facebook/react"> React</Link></li>
                </ul>
               </div>
             );
    }
});
