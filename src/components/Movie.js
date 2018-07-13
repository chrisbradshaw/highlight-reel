import React, { Component, Fragment } from 'react';

import Header from './Header';
import { ClipLoader } from 'react-spinners';
import Cast from './Cast';
import Footer from './Footer';
import '../css/Movie.css';
import StarRatingComponent from 'react-star-rating-component';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
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

          this.setState({ loading: false, movie });
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
      <Fragment>
        <Header />
        <div className="container movie-body">
          {
            <div>
              {this.state.loading ? (
                <div className="movie-loading-spinner">
                  <ClipLoader color={'#123abc'} loading={this.state.loading} />
                </div>
              ) : (
                <div>
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
                      <h2 className="sectionTitle">
                        {this.state.movie.title} ({parseInt(
                          this.state.movie.release_date
                        )})
                      </h2>
                      <table className="table-fill">
                        <tbody className="table-hover">
                          <tr>
                            <td className="text-left">Rating:</td>
                            <td className="text-left">
                              <StarRatingComponent
                                name="Movie Rating"
                                disabled={false}
                                emptyStar={'ios-star-outline'}
                                fullStar={'ios-star'}
                                halfStar={'ios-star-half'}
                                iconSet={'Ionicons'}
                                maxStars={5}
                                rating={this.state.starCount}
                                selectedStar={rating =>
                                  this.onStarRatingPress(rating)
                                }
                                fullStarColor={'red'}
                                value={
                                  parseInt(this.state.movie.vote_average) / 2
                                }
                              />{' '}
                              <span>({this.state.movie.vote_count} votes)</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <span className="bold">Genres:</span>
                      {this.state.movie.genres.map((e, i) => {
                        if (i < this.state.movie.genres.length - 1) {
                          return (
                            <span
                              className="label orange-red"
                              id={`genre-${i}`}
                              key={i}
                            >
                              {this.state.movie.genres[i].name}
                            </span>
                          );
                        } else {
                          return (
                            <span
                              className="label orange-red"
                              id={`genre-${i}`}
                              key={i}
                            >
                              {this.state.movie.genres[i].name}
                            </span>
                          );
                        }
                      })}
                      {/* </li>
              </ul> */}
                      <p className="movieDescription">
                        {this.state.movie.overview}
                      </p>
                    </section>
                  </div>
                  <Cast cast={this.state.movie.credits.cast} />
                </div>
              )}
            </div>
          }
        </div>
        <Footer />
      </Fragment>
    );
  }
}
