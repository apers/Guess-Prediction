import React, {Component} from 'react';
import './App.css';
import SearchField from "./Game/SearchField";
import {fetchPredictions} from "./Game/fetchUtils";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: "",
    };

    setTimeout(() => {
      this.setState({
        word: "kryssord",
      })
    }, 1000);

    setTimeout(() => {
      this.setState({
        word: "cheyenne",
      })
    }, 5000);

    setTimeout(() => {
      this.setState({
        word: "sioux",
      })
    }, 8000);

    const predictionPromise = fetchPredictions("Vazelina");
    predictionPromise.then((res) => {
      console.log(res);
    })
  }

  render() {
    return (
        <div className="App">
          <SearchField
              searchWord={this.state.word}
          />
        </div>
    );
  }
}

export default App;
