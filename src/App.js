import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimersDashboard from './components/TimersDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
    		<TimersDashboard />    		
      </div>
    );
  }
}

export default App;
