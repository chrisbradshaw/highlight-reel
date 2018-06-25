import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Form from './Form';
import logo from '../img/logo-white.png';
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
        <Form />
        <Nav />
      </header>
    );
  }
}
