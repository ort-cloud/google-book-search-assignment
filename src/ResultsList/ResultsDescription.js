import React from "react";

const ResultsDescription = props => {
  return (
    <React.Fragment>
      <section>
        <h2>Book Title</h2>
        <p>Author: Dis Author</p>
        <p>Price: $50.00</p>
        {/* <p>{props.description}</p> */}
      </section>
    </React.Fragment>
  );
};

export default ResultsDescription;
