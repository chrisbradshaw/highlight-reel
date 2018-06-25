import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className="navbar">
          <li>
            <a href="https://www.themoviedb.org/?language=en">
              <img
                src="https://www.themoviedb.org/static_cache/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
                alt="The Movie Database"
                width="75px"
                className="movieDbLogo"
              />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
