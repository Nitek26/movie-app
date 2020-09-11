import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import MovieContainer from './content/movieContainer';
import MovieFooter from './footer/movieFooter';
import MovieSearch from './header/movieSearch';
import MovieDetails from './header/movieDetails';

import { loadMovies } from './utils/store/thunks'
import { getAreMoviesLoading, getMovies } from './utils/store/selectors'

import './App.css';

function App({ startLoadingMovies, areMoviesLoading, movies }) {

  useEffect(() => {
    startLoadingMovies();
  }, [startLoadingMovies]);

  const selectedMovie = undefined;
  return (
    areMoviesLoading ?
      <div className="loadingMessage">
        Loading...
    </div>
      :
      (<div className="app">
        {selectedMovie ? <MovieDetails movie={selectedMovie} selectMovie={() => { }} /> : <MovieSearch />}
        <MovieContainer selectMovie={() => { }} movies={movies} />
        <MovieFooter />
      </div>));
}

const mapStateToProps = state => {
  const areMoviesLoading = getAreMoviesLoading(state);
  const movies = getMovies(state);
  
  return { 
    areMoviesLoading, 
    movies }
};

const mapDispatchToProps = dispatch => ({
  startLoadingMovies: () => dispatch(loadMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
