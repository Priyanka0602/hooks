import React, { Component } from 'react';
import './App.css';
import BossNameUsingHooks from './Components/BossNameUsingHooks';
import BossNameUsingClass from './Components/BossNameUsingClass';

class App extends Component {
  render() {
    return (
     <BossNameUsingClass />
    );
  }
}

export default App;
