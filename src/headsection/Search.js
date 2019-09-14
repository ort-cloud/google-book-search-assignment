import React, {Component} from "react";
import PrintType from "./PrintType";
import BookType from "./BookType";

class Search extends Component {
  render() {
    return (
      <div>
        <section>
          <label htmlFor='search'>Search:</label>
          <input type='text' value='Henry' />
          <button type='submit'>Search</button>
        </section>
        <section>
          <PrintType />
          <BookType />
        </section>
      </div>
    );
  }
}

export default Search;
