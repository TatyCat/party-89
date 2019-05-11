import React, { Component } from 'react';
import MovieData from '../components/MovieData'

class Movie extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Movie Guide</h1>
        </header>

        <MovieData />
      </>
    );
  }
}

export default Movie;