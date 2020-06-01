import React, { Component } from 'react';
import './App.css';
import Example from './components/moviePage'
import Navbar from './components/homePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Example />
        <div className="App-header">
          <h2>Welcome to Meerkat</h2>
        </div>
      </div>
    );
  }
}

export default App;
