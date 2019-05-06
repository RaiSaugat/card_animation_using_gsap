import React, { Component, useRef, useEffect } from "react";
import { TimelineLite, TweenMax } from "gsap";
import ReactDOM from "react-dom";
import Card from "./Card";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
  }
  handleAnimation = () => {
    this.setState({
      status: !this.state.status
    });
  };
  render() {
    return (
      <div className="App">
        <div className="cards">
          <Card state={this.state.status} number={5} />
          <button onClick={this.handleAnimation} className="animate">
            Animate
          </button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
