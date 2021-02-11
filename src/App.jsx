import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}
