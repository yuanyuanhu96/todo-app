import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { nanoid } from 'nanoid';
import './App.css';

export default class App extends Component {
  state = {
    buckets: [1, 2, 3, 4, 5],
    items: [
      { id: nanoid(), bucket: 1, name: ' Zion' },
      { id: nanoid(), bucket: 1, name: ' Yellow Stone' },
      { id: nanoid(), bucket: 2, name: ' Glacier' },
    ],
  };

  addItem = (event) => {
    const gotInput = event.target.value;
    const newItem = { id: nanoid(), bucket: 1, name: gotInput };
    const { items } = this.state;
    const newItems = [newItem, ...items];
    console.log('Adding a new item:', newItem);
    this.setState({ items: newItems });
  };

  deleteItem = (item) => {
    const { id, name } = item;
    if (window.confirm(`Delete ${name} ?`)) {
      const { items } = this.state;
      const newItems = items.filter((item) => item.id !== id);
      this.setState({ items: newItems });
    }
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
