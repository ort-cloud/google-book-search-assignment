import React from "react";
import ResultsDescription from "./ResultsDescription";
import ResultsImage from "./ResultsImage";

const ResultsList = props => {
  return (
    <div>
      <ResultsImage />
      <ResultsDescription />
    </div>
  );
};

export default ResultsList;
