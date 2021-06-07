import React from 'react';
import { actors, movies } from '../data';

const Actors = () => {

  const handleAddActors = (actor) => {
  return (
    <div>
      {actor.name}
      <ul>
        {actor.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>    
  )
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => handleAddActors(actor))}
    </div>
  );
};

export default Actors;
