import React from "react";

const BookType = props => {
  return (
    <>
      <label htmlFor='book-drop-down'>Book Type:</label>
      <select id='book-drop-down'>
        <option value='ebooks'>Ebooks</option>
        <option value='paid-ebooks'>Paid Ebooks</option>
        <option value='free-ebooks'>Free Ebooks</option>
      </select>
    </>
  );
};

export default BookType;
