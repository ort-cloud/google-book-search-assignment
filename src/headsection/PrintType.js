import React from "react";

const PrintType = props => {
  return (
    <>
      <label htmlFor='print-drop-down'>Print Type:</label>
      <select id='print-drop-down'>
        <option value='all'>All</option>
        <option value='books'>Books</option>
        <option value='title'>Title</option>
      </select>
    </>
  );
};

export default PrintType;
