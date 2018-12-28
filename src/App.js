import React, { Component } from 'react';
import './App.css';
import Todo from './Main/todo';
import Menu from './template/menu';
import './template/custom.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu></Menu>
        <Todo></Todo>
        
      </div>
    );
  }
}

export default App;
