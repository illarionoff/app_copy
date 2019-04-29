import React, { Component } from "react";
import ReactDOM from "react-dom";

require("./index.css");

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hi</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
