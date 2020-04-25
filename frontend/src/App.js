import React from "react";
import "./App.css";
import { getData } from "./api";
import { DeleteSearches } from "./components/DeleteSearches";
import { Translator } from "./components/Translator";
import { RecentSearches } from "./components/RecentSearches";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_text: null,

      data: [],
      message: null,
      id: 0,
      intervalIsSet: false,
    };
  }

  componentDidMount() {
    this.getDataFromDb();
  }

  getDataFromDb = async () => {
    let result = await getData();
    this.setState({ ...this.state, data: result });
  };

  render() {
    return (
      <div>
        <div>
          <p>HELLO HI THERE!!!</p>
          <h1 id="mainheading">English text to minion text translator:</h1>
        </div>
        <Translator
          data={this.state.data}
          getDataFromDb={this.getDataFromDb.bind(this)}
        />
        <br />
        <DeleteSearches
          data={this.state.data}
          getDataFromDb={this.getDataFromDb.bind(this)}
        />
        <br />
        <RecentSearches data={this.state.data} />
        <br />
      </div>
    );
  }
}

export default App;
