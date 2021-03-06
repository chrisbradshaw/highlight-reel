import React from 'react';
import { Link } from 'react-router-dom';
import '../css/FormResults.css';

export default class FormResults extends React.Component {
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
        {this.props.results.slice(0, 5).map((element, index) => {
          return (
            <li key={index} onClick={this.handleClick}>
              <Link to={`/movie/${this.props.results[index].id}`}>
                <img
                  src={
                    this.props.results[index].poster_path === null
                      ? 'http://via.placeholder.com/300x450'
                      : `${link}${this.props.results[index].poster_path}`
                  }
                  alt={`${this.props.results[index].title} poster`}
                  className="resultPoster"
                />
                <div>
                  <p>{this.props.results[index].title}</p>
                  <p>{this.props.results[index].overview}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
