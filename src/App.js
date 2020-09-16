import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import MovieContainer from './content/movieContainer';
import MovieFooter from './footer/movieFooter';
import MovieSearch from './header/movieSearch';
import MovieDetails from './header/movieDetails';

import { loadMovies } from './store/thunks'
import { deselectMovie } from './store/actions'
import { getAreMoviesLoading, getMovies, getSelectedMovie, getFilterBy, getSortBy, getOperationCounter } from './store/selectors'

import './App.css';

function App({ startLoadingMovies, areMoviesLoading, deselectMovie, selectedMovie, filter, sort, operationCounter }) {

  useEffect(() => {
    startLoadingMovies(filter, sort);
  }, [startLoadingMovies, filter, sort, operationCounter]);

  return (
    <>
      <div className={'loadingMessage ' + (areMoviesLoading ? 'visible' : '')}>
        Loading...
      </div>
      <div className="app">
        {selectedMovie ? <MovieDetails movie={selectedMovie} onSearchClicked={deselectMovie} /> : <MovieSearch />}
        <MovieContainer />
        <MovieFooter />
      </div>
    </>);
}

const mapStateToProps = state => {
  const areMoviesLoading = getAreMoviesLoading(state);
  const operationCounter = getOperationCounter(state);
  const movies = getMovies(state);
  const selectedMovie = getSelectedMovie(state);
  const filter = getFilterBy(state);
  const sort = getSortBy(state);

  return {
    areMoviesLoading,
    operationCounter,
    movies,
    selectedMovie,
    filter,
    sort
  }
};

const mapDispatchToProps = dispatch => ({
  startLoadingMovies: (filter, sort) => dispatch(loadMovies(filter, sort)),
  deselectMovie: () => dispatch(deselectMovie())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
