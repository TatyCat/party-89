import React, { Component } from 'react';
import movieJSON from '../data/movieData.json'

class MovieData extends Component {
  render() {
    return (
      <div>
        <section>
          {movieJSON.results.map(x => {
            return (
              <section key={x.id}>
                <h2>{x.original_title} </h2>
                Rating: {x.vote_average}

                <p>{x.overview}</p>
                <p>Release Date: {x.release_date}</p>
                <img src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + x.poster_path} alt={x.title} />
              </section>
            )
          })}

        </section>
      </div >
    );
  }
}

export default MovieData;