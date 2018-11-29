import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HJ: 1,
      effort: 0,
      enlightenment: 0
    };
    this.effortClick = this.effortClick.bind(this);
    this.enlighten = this.enlighten.bind(this);
  }

  effortClick() {
    let effort = this.state.effort;
    if (effort < 9) {
      this.setState({ effort: effort + 1 });
    } else {
      this.enlighten();
    }
  }

  enlighten() {
    let HJ = this.state.HJ;
    let effort = this.state.effort;
    let enlightenment = this.state.enlightenment;
    this.setState({
      effort: 0,
      HJ: HJ + 1,
      enlightenment: enlightenment + 1
    });
  }

  render() {
    return (
      <div className="App">
        <p>Hero's Journey {this.state.HJ}</p>
        <button onClick={this.effortClick}>Put In Effort</button>
        <p>{this.state.effort}/10</p>
        <p>Enlightenment: {this.state.enlightenment}</p>
      </div>
    );
  }
}

export default App;
