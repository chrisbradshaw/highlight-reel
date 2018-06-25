import React, { Component } from 'react';
import '../css/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        Made by Chris Bradshaw, {new Date().getFullYear()}{' '}
        <span>
          <a href="https://github.com/chrisbradshaw">Github Repo</a>
        </span>
      </div>
    );
  }
}
