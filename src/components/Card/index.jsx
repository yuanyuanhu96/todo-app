import React, { Component } from 'react';
import './index.css';

export default class Card extends Component {
  render() {
    const { item } = this.props;
    const { deleteItem } = this.props;

    return (
      <div className="todo-card">
        {item.name}{' '}
        <input
          onClick={() => {
            deleteItem(item);
          }}
          type="button"
          value="X"
        />
      </div>
    );
  }
}
