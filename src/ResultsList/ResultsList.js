import React, { Component } from 'react'
import ResultsDescription from './ResultsDescription'
import ResultsImage from './ResultsImage'


class ResultsList extends Component {
  render() {
    return (
      <div>
        <ResultsImage />
        <ResultsDescription />
      </div>
    )
  }
}

export default ResultsList;