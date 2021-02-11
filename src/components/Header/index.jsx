import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
          <div>
            <h1>My Bucket</h1>
            <h3>Make it easy for you to make any choice</h3>
            <input
              type="text"
              placeholder="plese enter your choise here, press enter to submit"
            />
          </div>
        );
    }
}
