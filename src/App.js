import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import MovieContainer from './content/movieContainer';
import MovieFooter from './footer/movieFooter';
import MovieSearch from './header/movieSearch';
import MovieDetails from './header/movieDetails';

import { loadMovies } from './utils/store/thunks'
import { deselectMovie } from './utils/store/actions'
import { getAreMoviesLoading, getMovies, getSelectedMovie, getFilterBy } from './utils/store/selectors'

import './App.css';

function App({ startLoadingMovies, areMoviesLoading, deselectMovie, selectedMovie, filter }) {

  useEffect(() => {
    startLoadingMovies(filter);
  }, [startLoadingMovies, filter]);

  return (
    areMoviesLoading ?
      <div className="loadingMessage">
        Loading...
    </div>
      :
      (<div className="app">
        {selectedMovie ? <MovieDetails movie={selectedMovie} onSearchClicked={deselectMovie} /> : <MovieSearch />}
        <MovieContainer />
        <MovieFooter />
      </div>));
}

const mapStateToProps = state => {
  const areMoviesLoading = getAreMoviesLoading(state);
  const movies = getMovies(state);
  const selectedMovie = getSelectedMovie(state);
  const filter = getFilterBy(state);
  
  return { 
    areMoviesLoading, 
    movies,
    selectedMovie,
    filter
   }
};

const mapDispatchToProps = dispatch => ({
  startLoadingMovies: (filter) => dispatch(loadMovies(filter)),
  deselectMovie: () => dispatch(deselectMovie())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
