import React, { Component } from 'react';
import '../css/Cast.css';

export default class Cast extends Component {
  render() {
    const link = 'https://image.tmdb.org/t/p/w300';
    return (
      <div>
        <h3>Cast</h3>
        <div className="figureContainer">
          {this.props.cast.slice(0, 6).map((e, i) => {
            return (
              <figure key={i}>
                <img
                  src={
                    this.props.cast[i].profile_path === null
                      ? 'http://via.placeholder.com/300x450'
                      : link + this.props.cast[i].profile_path
                  }
                  key={i}
                  alt={this.props.cast[i].name}
                  className="imgResponsive"
                />
                <figcaption>{this.props.cast[i].name}</figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    );
  }
}
