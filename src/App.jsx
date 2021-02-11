import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

export default class App extends Component {
  state = {
    buckets: [1, 2, 3, 4, 5],
    items: [
      { bucket: 1, name: ' Zion' },
      { bucket: 1, name: ' Yellow Stone' },
      { bucket: 2, name: ' Glacier' },
    ],
  };

  addItem = (event) => {
    const gotInput = event.target.value;
    const newItem = { bucket: 1, name: gotInput };
    const { items } = this.state;
    const newItems = [newItem, ...items];
    this.setState({ items: newItems });
  };

  deleteItem = (item) => {
    window.confirm(`Delete?${item.name}`);
  };

  render() {
    const { state } = this;
    return (
      <div className="App">
        <Header addItem={this.addItem} />
        <Main state={state} deleteItem={this.deleteItem} />
      </div>
    );
  }
}
