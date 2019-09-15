import React, {Component} from "react";
import "./App.css";
import HeadTitle from "./headsection/HeadTitle";
import ResultsList from "./ResultsList/ResultsList";

class App extends Component {
  state = {
      query: "game of thrones", filter: "ebooks", printType: "all",
  };

  componentDidMount() {
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
        console.log(responseJson);
      });
  }

  handleSearchQuery = event => {
    event.preventDefault();
    this.setState({
      search: [{query: event.target.value}],
    });
    console.log(this.state.query);
  };

  handleFilter = () => {};

  handlePrintType = () => {};

  render() {
    return (
      <div className='App'>
        <HeadTitle 
          userQuery={event => this.handleSearchQuery(event)} 
          serchValue={this.state.query} 
          />
        <ResultsList />
      </div>
    );
  }
}

export default App;
