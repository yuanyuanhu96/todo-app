import React, { Component } from 'react';
import Card from '../Card';
import './index.css';

export default class Bucket extends Component {
  render() {
    const { items } = this.props;
    const { id } = this.props;
    return (
      <div className="todo-bucket">
        <h4>Bucket {id}</h4>
        {items.map((item)=>{return(<Card item={item} />);}) }
      </div>
    );
  }
}
