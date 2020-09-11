import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import MovieContainer from './content/movieContainer';
import MovieFooter from './footer/movieFooter';
import MovieSearch from './header/movieSearch';
import MovieDetails from './header/movieDetails';

import { loadMovies } from './utils/store/thunks'
import { selectMovie, deselectMovie } from './utils/store/actions'
import { getAreMoviesLoading, getMovies, getSelectedMovie } from './utils/store/selectors'

import './App.css';

function App({ startLoadingMovies, areMoviesLoading, movies, selectMovie, deselectMovie, selectedMovie }) {

  useEffect(() => {
    startLoadingMovies();
  }, [startLoadingMovies]);

  return (
    areMoviesLoading ?
      <div className="loadingMessage">
        Loading...
    </div>
      :
      (<div className="app">
        {selectedMovie ? <MovieDetails movie={selectedMovie} onSearchClicked={deselectMovie} /> : <MovieSearch />}
        <MovieContainer selectMovie={selectMovie} movies={movies} />
        <MovieFooter />
      </div>));
}

const mapStateToProps = state => {
  const areMoviesLoading = getAreMoviesLoading(state);
  const movies = getMovies(state);
  const selectedMovie = getSelectedMovie(state);
  
  return { 
    areMoviesLoading, 
    movies,
    selectedMovie
   }
};

const mapDispatchToProps = dispatch => ({
  startLoadingMovies: () => dispatch(loadMovies()),
  selectMovie: (movie) => dispatch(selectMovie(movie)),
  deselectMovie: () => dispatch(deselectMovie())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
