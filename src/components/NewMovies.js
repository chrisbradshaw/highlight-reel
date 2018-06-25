import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/NewMovies.css';

export default class NewMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    const key = process.env.REACT_APP_MOVIE_APP_ID;

    // Get a date range between today and one month ago to dynamically update the link for the request
    let todayDate = new Date();
    let today =
      todayDate.getFullYear() +
      '-' +
      (todayDate.getMonth() + 1) +
      '-' +
      todayDate.getDate();
    let oneMonthAgo =
      (todayDate.getMonth() === 0
        ? todayDate.getFullYear() - 1
        : todayDate.getFullYear()) +
      '-' +
      (todayDate.getMonth() === 0
        ? todayDate.getMonth() + 12
        : todayDate.getMonth()) +
      '-' +
      todayDate.getDate();

    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${oneMonthAgo}&primary_release_date.lte=${today}`
    )
      .then(response => {
        if (response.status !== 200) {
          console.log('Error: ' + response.status);
          return;
        }
        response.json().then(data => {
          const movies = data.results;
          this.setState({ movies });
        });
      })
      .catch(err => {
        console.log('Error Fetching: ', err);
      });
  }
  render() {
    return (
      <section>
        <div className="newMovies">
          {this.state.movies.map((movie, i) => {
            return (
              <Link
                to={`/movie/${this.state.movies[i].id}`}
                key={i}
                className="movieLink"
              >
                <img
                  src={
                    this.state.movies[i].poster_path === null
                      ? 'http://via.placeholder.com/300x450'
                      : `https://image.tmdb.org/t/p/w300/${
                          this.state.movies[i].poster_path
                        }`
                  }
                  alt={`${this.state.movies.title} poster`}
                  className="imgResponsive"
                />
                <div className="movieInfo">
                  <h2>{this.state.movies[i].title}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    );
  }
}
