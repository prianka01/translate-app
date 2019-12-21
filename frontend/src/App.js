import React from "react";
import "./App.css";
import { getData, deleteData, translateText, putData } from "./api";
import { DeleteSearches } from "./components/DeleteSearches";
import { Translator } from "./components/Translator";
import { RecentSearches } from "./components/RecentSearches";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_text: null,
      buttonIsClicked: false,
      data: [],
      message: null,
      id: 0,
      intervalIsSet: false
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.onClickTranslate = this.onClickTranslate.bind(this);
    // this.translateToMinion = this.translateToMinion.bind(this);
  }

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
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
        <Translator data={this.state.data} />
        <br />
        <DeleteSearches data={this.state.data} />
        <br />
        <RecentSearches data={this.state.data} />
        <br />
      </div>
    );
  }
}

export default App;
