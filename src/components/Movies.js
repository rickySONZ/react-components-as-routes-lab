import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const handleAddMovie = (movie) => {
    return (
      <div>
        {movie.title} {movie.time}
        <ul>
        {movie.genres.map(genre =><li>{genre}</li>)}
        </ul>
      </div>
    )
  }

  return (
    <div>
        <h1>Movies Page</h1>
    {movies.map(movie => handleAddMovie(movie))}
    </div>
  );
};

export default Movies;
