import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import MovieContainer from './content/movieContainer';
import MovieFooter from './footer/movieFooter';
import MovieSearch from './header/movieSearch';
import MovieDetails from './header/movieDetails';
import NotFound from './content/notFound';

import { loadMovies } from './store/thunks'
import { getAreMoviesLoading, getMovies, getFilterBy, getSortBy, getOperationCounter } from './store/selectors'

import './App.css';

function App({ startLoadingMovies, areMoviesLoading, filter, sort, operationCounter }) {

  useEffect(() => {
    startLoadingMovies(filter, sort);
  }, [startLoadingMovies, filter, sort, operationCounter]);

  return (
    <>
      <div className={'loadingMessage ' + (areMoviesLoading ? 'visible' : '')}>
        Loading...
      </div>
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/">
              <MovieSearch />
              <MovieContainer />
              <MovieFooter />
            </Route>
            <Route path="/film/:id">
              <MovieDetails />
              <MovieContainer />
              <MovieFooter />
            </Route>
            <Route path="/404" component={NotFound}>
              <NotFound />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    </>);
}

const mapStateToProps = state => {
  const areMoviesLoading = getAreMoviesLoading(state);
  const operationCounter = getOperationCounter(state);
  const movies = getMovies(state);
  const filter = getFilterBy(state);
  const sort = getSortBy(state);

  return {
    areMoviesLoading,
    operationCounter,
    movies,
    filter,
    sort
  }
};

const mapDispatchToProps = dispatch => ({
  startLoadingMovies: (filter, sort) => dispatch(loadMovies(filter, sort))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
