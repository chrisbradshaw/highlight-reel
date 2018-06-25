import React, { Component } from 'react';
import FormResults from './FormResults';
import search from '../img/search.svg';
import '../css/Form.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
  }

  handleKeyUp() {
    document.getElementById('results').className = 'formResults';
    let val = document.getElementById('searchInput').value;

    if (val === '') {
      document.getElementById('results').className = 'noDisplay';
    }

    const key = process.env.REACT_APP_MOVIE_APP_ID;

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${val}&page=1&include_adult=false`
    )
      .then(response => {
        if (response.status !== 200) {
          console.log('Error: ' + response.status);
          return;
        }

        response.json().then(data => {
          const results = data.results;
          this.setState({ results });
        });
      })
      .catch(err => {
        console.log('Error Fetching:', err);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="form">
        <img src={search} alt="search icon" className="searchIcon" />
        <input
          onKeyUp={this.handleKeyUp}
          id="searchInput"
          className="searchBar"
          type="text"
          placeholder="Search for your movie here"
          required
        />
        <FormResults results={this.state.results} />
      </form>
    );
  }
}
