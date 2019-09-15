import React, { Component } from 'react'
import Search from "./Search";

class HeadTitle extends Component {
  render () {
    return (
      <div>
        <h1>Google Book Search</h1>
        <Search 
          userQuery={this.props.userQuery}
          /* searchValue={searchValue} */ 
        />
      </div>
    );
  }
};

export default HeadTitle;
