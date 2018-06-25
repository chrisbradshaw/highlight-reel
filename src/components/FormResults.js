import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/FormResults.css';

export default class FormResults extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    document.getElementById('results').className = 'noDisplay';
    document.getElementById('searchInput').value = '';
  }
  render() {
    const link = 'https://image.tmdb.org/t/p/w300';
    return (
      <ul id="results" onClick={this.handleClick}>
        {this.props.results.map((e, i) => {
          return (
            <li key={i} onClick={this.handleClick}>
              <Link to={`/movie/${this.props.results[i].id}`}>
                <img
                  src={
                    this.props.results[i].poster_path === null
                      ? 'http://via.placeholder.com/300x450'
                      : `${link}${this.props.results[i].title} poster`
                  }
                  className="resultPoster "
                  alt="Poster"
                />
                <div>
                  <p>{this.props.results[i].title}</p>
                  <p>{this.props.results[i].release_date}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
