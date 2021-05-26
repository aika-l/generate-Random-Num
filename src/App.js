import "./styles.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lowerLimit: "",
      upperLimit: "",
      result: ""
    };
  }

  onType = (e) => {
    const value = e.target.value;
    this.setState({ lowerLimit: value });
  };
  onInput = (e) => {
    const value = e.target.value;
    this.setState({ upperLimit: value });
  };

  onClear = () => {
    this.setState({ lowerLimit: "", upperLimit: "", result: "" });
  };

  onGenerate = () => {
    const { lowerLimit, upperLimit } = this.state;
    const random = Math.floor(
      Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit
    );
    if (
      !(isNaN(upperLimit) && isNaN(lowerLimit)) &&
      Number(upperLimit) > Number(lowerLimit)
    ) {
      this.setState({ result: random });
    } else {
      this.setState({ result: "Invalid Value" });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <h2>{this.state.result}</h2>
        <div className="container">
          <label>Lower Limit </label>
          <input value={this.state.lowerLimit} onChange={this.onType} />
          <br />
          <label>Upper Limit </label>
          <input value={this.state.upperLimit} onChange={this.onInput} />
          <br />
          <button className="generate" onClick={this.onGenerate}>
            Generate
          </button>
          <button onClick={this.onClear}> Clear </button>
        </div>
      </div>
    );
  }
}

export default App;
