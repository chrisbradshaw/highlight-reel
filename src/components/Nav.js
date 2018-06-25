import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className="navbar">
          <li>
            API:{' '}
            <img
              src="https://www.themoviedb.org/static_cache/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
              alt="The Movie Database"
              width="75px"
            />
          </li>
        </ul>
      </nav>
    );
  }
}
