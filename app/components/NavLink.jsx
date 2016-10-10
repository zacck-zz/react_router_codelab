import React from 'react';
import {Link} from 'react-router';
{/*We can use this module to wrap links that need to know if they are active or not */}
export default React.createClass({
  render{
    <Link {...this.props} activeClassName="active"/>
  }
})
