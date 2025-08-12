import React, { Component } from "react";
import Update from "./components/Update";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // componentDidMount
  componentDidMount() {
    console.log("componentDidMount :when component render/load first time");
  }

  // componentWillUnMount
  componentWillUnmount() {
    console.log("componentWillUnmount : component removed");
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <h1>Debugshala</h1>
        <Update number={this.state.count} />// number = 0 // 1
        <button
          onClick={() => {
            this.handleIncrement();
          }}
        >
          Click on me{" "}
        </button>
      </div>
    );
  }
}
export default App;
