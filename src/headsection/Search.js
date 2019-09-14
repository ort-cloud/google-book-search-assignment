import React, {Component} from "react";
import PrintType from "./PrintType";
import BookType from "./BookType";

class Search extends Component {
  render() {
    return (
      <form>
        <section>
          <label htmlFor='search'>Search:</label>
          <input type='text' value='Henry' />
          <button type='submit'>Search</button>
        </section>
        <section>
          <PrintType />
          <BookType />
        </section>
      </form>
    );
  }
}

export default Search;
