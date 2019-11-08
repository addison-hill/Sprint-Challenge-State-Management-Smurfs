import React, { Component } from "react";
import "./App.css";
import Smurfs from './Smurfs';
import AddSmurf from './AddSmurf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddSmurf />
        <Smurfs />
      </div>
    );
  }
}

export default App;
