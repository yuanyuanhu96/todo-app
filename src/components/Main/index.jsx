import React, { Component } from 'react'
import Bucket from '../Bucket'

export default class Main extends Component {
    render() {
        return (
          <div>
            <Bucket />
            <Bucket />
            <Bucket />
          </div>
        );
    }
}

