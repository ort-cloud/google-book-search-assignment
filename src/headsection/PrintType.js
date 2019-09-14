import React, { Component } from 'react'

class PrintType extends Component {
  render() {
    return (
      <>
        <label htmlFor="print-drop-down">Print Type:</label>
        <select id="print-drop-down">
          <option value="This test1">Test1</option>
          <option value="This test2">Test2</option>
          <option value="This test3">Test3</option>
          <option value="This test4">Test4</option>
        </select>
      </>
    )
  }
}

export default PrintType;