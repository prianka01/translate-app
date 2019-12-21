import React from "react";
import { translateText, putData } from "../api";
export class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_text: "",
      data: this.props.data,
      success: 0,
      translated: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClickTranslate = this.onClickTranslate.bind(this);
    this.translateToMinion = this.translateToMinion.bind(this);
  }
  handleChange(e) {
    this.setState({ input_text: e.target.value });
  }
  putDataToDB = message => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }
    putData(message, idToBeAdded);
  };
  onClickTranslate = () => {
    this.putDataToDB(this.state.input_text);
    this.setState({
      buttonIsClicked: true
    });
    this.translateToMinion();
  };

  translateToMinion = async () => {
    const dataResponse = await translateText(this.state.input_text);
    this.setState({
      success: dataResponse.success.total,
      translated: dataResponse.contents.translated
    });
  };
  render() {
    const input = this.state.input_text;
    return (
      <div id="translator">
        <h1 id="heading1">Enter text to translate:</h1>
        <input
          id="input"
          placeholder="Enter text..."
          value={input}
          onChange={this.handleChange}
        />
        <button id="translate" onClick={() => this.onClickTranslate()}>
          Translate
        </button>
        {this.state.success === 1 && (
          <p id="heading2">Translated minion text={this.state.translated}</p>
        )}
      </div>
    );
  }
}
