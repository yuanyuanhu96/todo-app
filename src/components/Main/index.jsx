import React, { Component } from 'react';
import Bucket from '../Bucket';
import './index.css';

export default class Main extends Component {
  render() {
    const { buckets, items } = this.props.state;
    const { deleteItem } = this.props;
    return (
      <div className="todo-main">
        {' '}
        {buckets.map((index) => {
          return <Bucket key={index} items={items} deleteItem={deleteItem} />;
        })}
      </div>
    );
  }
}
