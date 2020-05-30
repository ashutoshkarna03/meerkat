import React, { Component } from 'react';
import './App.css';
import Example from './components/moviePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Meerkat</h2>
        </div>
        <Example />
      </div>
    );
  }
}

export default App;
