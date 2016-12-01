import React, { Component } from 'react';
import Counter from './Counter';
import '../stylesheets/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is my cool React page</h1>
        <Counter />
      </div>
    );
  }
}

export default App;
