import React, { Component } from 'react';
import './index.css';

export default class Card extends Component {
  render() {
    const { item } = this.props;

    return <div className="todo-card">{item.name}</div>;
  }
}
