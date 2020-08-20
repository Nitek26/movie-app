import React from 'react';
import MovieContainer from './movies/movieContainer';
import MovieFooter from './movies/movieFooter';
import MovieHeader from './movies/movieHeader';

import './App.css';

function App() {
  return (
  <div className="app">
    <MovieHeader />
    <MovieContainer />
    <MovieFooter />
  </div>
  );
}

export default App;
