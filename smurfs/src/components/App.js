import React, { Component } from "react";
import "./App.css";

//components
import CharacterList from "./CharacterList";

// Follow these steps to build app:
// 1) set up "empty" reducer and initial state
// 2) set up store and provider
// 3) connect components
// 4) add events and event handleers in UI
// 5) build action creators
// 5) write the reducer logic for actions

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

export default App;
