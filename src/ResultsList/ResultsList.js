import React from "react";
import ResultsDescription from "./ResultsDescription";
import ResultsImage from "./ResultsImage";

const ResultsList = props => {
  console.log(props);
  if (!props.resultsAPI.items) {
    return null;
  }
  return (
    <div>
      {props.resultsAPI.items.map(item => {
        return (
          <React.Fragment>
            <ResultsImage image={item.volumeInfo.imageLinks.thumbnail} />
            <ResultsDescription descritption={item.volumeInfo.descritption} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ResultsList;
