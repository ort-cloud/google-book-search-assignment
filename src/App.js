import React, {Component} from "react";
import "./App.css";
import HeadTitle from "./headsection/HeadTitle";
import ResultsList from "./ResultsList/ResultsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      filter: "ebooks",
      printType: "all",
      jsonObject: {},
    };
  }

  componentDidUpdate(prevState) {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        this.state.query
      )}filter${encodeURIComponent(
        this.state.filter
      )}&printType=${encodeURIComponent(
        this.state.printType
      )}&orderBy=relevance&key=AIzaSyD29xqWqWdbYYFIQqrOoPnOkdSpjx5OTLY`
    )
      .then(response => response.json())
      .then(responseJson => {
        /* const transferThis = responseJson
        this.setState({jsonObject: transferThis}) */
        console.log(responseJson);
      });
  }

  handleSearchQuery = event => {
    event.preventDefault();
    this.setState({
      query: event.target.value,
    });
  };

  handleFilter = () => {};

  handlePrintType = () => {};

  render() {
    const searchValue = this.state.query;
    return (
      <div className='App'>
        <HeadTitle
          userQuery={event => this.handleSearchQuery(event)}
          serchValue={searchValue}
        />
        <ResultsList />
      </div>
    );
  }
}

export default App;
