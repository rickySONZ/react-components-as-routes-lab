import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const handleAddDirectors = (director) => {
    return (
      <div>
        {director.name}
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => handleAddDirectors(director))}
    </div>
  );
}

export default Directors
