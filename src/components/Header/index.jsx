import React, { Component } from 'react';
import './index.css';

export default class Header extends Component {
  render() {
    return (
      <div className="todo-header">
        <h1>My Bucket</h1>
        <h4>Make it easy for you to make any choice</h4>
        <input
          onBlur={this.props.addItem}
          type="text"
          placeholder="click else where submit"
        />
      </div>
    );
  }
}
