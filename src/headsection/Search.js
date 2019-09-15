//import React, {Component} from "react";
import React from "react";
import PrintType from "./PrintType";
import BookType from "./BookType";

const Search = props => {
  return (
    <form>
      <section>
        <label htmlFor='search'>Search:</label>
        <input type='text' onSubmit={props.userQuery} value={props.userValue}  />
        <button type='submit'>Search</button>
      </section>
      <section>
        <PrintType />
        <BookType />
      </section>
    </form>
  );
};

export default Search;
