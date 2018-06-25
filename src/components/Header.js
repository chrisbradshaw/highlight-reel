import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './Nav';
import logo from '../img/logo.png';
import '../css/Header.css';

export default class Header extends Component {
  render() {
    return (
      <header>
        <Link to={'/'}>
          <h1>
            <img src={logo} alt="Highlight Reel" />
          </h1>
        </Link>
      </header>
    );
  }
}
