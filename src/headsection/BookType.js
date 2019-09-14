import React, { Component } from 'react'

class BookType extends Component {
  render() {
    return (
      <>
        <label htmlFor="book-drop-down">Book Type:</label>
        <select id="book-drop-down">
          <option value="This test1">Test1</option>
          <option value="This test2">Test2</option>
          <option value="This test3">Test3</option>
          <option value="This test4">Test4</option>
        </select>
      </>
    )
  }
}

export default BookType;