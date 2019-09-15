//import React, { Component } from 'react'
import React from "react";
import Search from "./Search";

const HeadTitle = props => {
  return (
    <div>
      <h1>Google Book Search</h1>
      <Search 
        userQuery={props.userQuery}
        searchValue={props.searchValue} 
      />
    </div>
  );
};

export default HeadTitle;
