import React from 'react';
import MovieContainer from './content/movieContainer';
import MovieFooter from './footer/movieFooter';
import MovieHeader from './header/movieHeader';

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
