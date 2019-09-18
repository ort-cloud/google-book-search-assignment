import React from "react";
import ResultsDescription from "./ResultsDescription";
import ResultsImage from "./ResultsImage";

const ResultsList = props => {
  /* console.log(); */
  if (!props.resultsAPI.items) {
    return null;
  }

  return (
    <div>
      {props.resultsAPI.items.map(items => {
        return (
          <React.Fragment>
            <ResultsImage image={items.volumeInfo.imageLinks.thumbnail} />
            <ResultsDescription
              title={items.volumeInfo.title}
              author={items.volumeInfo.authors}
              price={items.saleInfo.amount}
              descritption={items.volumeInfo.descritption}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ResultsList;
