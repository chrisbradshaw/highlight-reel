import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import Cast from './Cast';
import moment from 'moment';
import '../css/Movie.css';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        genres: [],
        credits: {
          cast: [],
          crew: [],
        },
      },
    };
    this.getData = this.getData.bind(this);
  }
  getData() {
    const key = process.env.REACT_APP_MOVIE_APP_ID;
    const id = window.location.pathname.substring(7);

    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US&append_to_response=credits`
    )
      .then(response => {
        if (response.status !== 200) {
          console.log('Error: ' + response.status);
          return;
        }
        response.json().then(data => {
          const movie = data;

          this.setState({ movie });
        });
      })
      .catch(err => {
        console.log('Error Fetching: ', err);
      });
  }
  componentDidMount() {
    this.getData();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.movie !== this.state.movie) {
      this.getData();
    }
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="moviePage">
            <div className="poster">
              <img
                src={
                  this.state.movie.poster_path === null
                    ? 'http://via.placeholder.com/300x450'
                    : `https://image.tmdb.org/t/p/w300${
                        this.state.movie.poster_path
                      }`
                }
                alt={`${this.state.movie.title} poster`}
                className="posterImg"
              />
            </div>
            <section className="movieDetails">
              <h2 className="sectionTitle">{this.state.movie.title}</h2>
              {/* <ul className="detailsList">
                <li>
                  <span className="bold">Release date: </span>
                  {this.state.movie.release_date}
                </li>
                <li>
                  <span className="bold">Rating: </span>
                  {this.state.movie.vote_average}
                </li>
                <li>
                  <span className="bold">Vote count: </span>
                  {this.state.movie.vote_count}
                </li>
                <li> */}
              <table class="table-fill">
                <tbody class="table-hover">
                  <tr>
                    <td class="text-left">Release date:</td>
                    <td class="text-left">{this.state.movie.release_date}</td>
                  </tr>
                  <tr>
                    <td class="text-left">Rating:</td>
                    <td class="text-left">{this.state.movie.vote_average}</td>
                  </tr>
                  <tr>
                    <td class="text-left">Vote count:</td>
                    <td class="text-left">{this.state.movie.vote_count}</td>
                  </tr>
                </tbody>
              </table>

              <span className="bold">Genres:</span>
              {this.state.movie.genres.map((e, i) => {
                if (i < this.state.movie.genres.length - 1) {
                  return (
                    <span className="label orange-red">
                      {this.state.movie.genres[i].name}
                    </span>
                  );
                } else {
                  return (
                    <span className="label orange-red">
                      {this.state.movie.genres[i].name}
                    </span>
                  );
                }
              })}
              {/* </li>
              </ul> */}
              <p className="movieDescription">{this.state.movie.overview}</p>
            </section>
          </div>
          <Cast cast={this.state.movie.credits.cast} />
        </div>
      </div>
    );
  }
}
