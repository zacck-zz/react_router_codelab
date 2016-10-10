import React from 'react';

export default React.createClass({
  render() {
    return(
      <div>
        <h2>this is  {this.props.params.repoName} by {this.props.params.userName}</h2>
      </div>
    )
  }
})
