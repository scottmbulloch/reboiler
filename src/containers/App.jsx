import React, { Component } from 'react';
import { Link } from 'react-router';
import '../stylesheets/App.scss';

// This is more of a 'layout' kind of component.
class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
        {this.props.children}
      </div>
    );
  }
}

export default App;
