import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './CustomNavbar';
import HomeContainer from './HomeContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={HomeContainer} />
        </div>
      </Router>
    );
  }
}

export default App;

