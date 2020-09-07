import React, { useState } from 'react';
import MovieContainer from './content/movieContainer';
import MovieFooter from './footer/movieFooter';
import MovieSearch from './header/movieSearch';
import MovieDetails from './header/movieDetails';

import './App.css';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(undefined);

  return (
  <div className="app">
    {selectedMovie ? <MovieDetails movie={ selectedMovie } selectMovie={ setSelectedMovie } /> : <MovieSearch /> }
    <MovieContainer selectMovie={ setSelectedMovie } />
    <MovieFooter />
  </div>
  );
}

export default App;
