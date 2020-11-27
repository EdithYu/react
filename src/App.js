import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    number: 0
  }

  render () {
    const { number } = this.state
    return (
      <div className="App">
        {number}
      </div>
    )
  }
}

export default App;
