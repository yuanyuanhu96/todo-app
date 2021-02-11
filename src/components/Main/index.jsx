import React, { Component } from 'react';
import Bucket from '../Bucket';
import './index.css';

export default class Main extends Component {
  render() {
    const { buckets, items } = this.props.state;

    return (
      <div className="todo-main">
        {' '}
        {buckets.map((index) => {
          return <Bucket id={index} items={items} />;
        })}
      </div>
    );
  }
}
