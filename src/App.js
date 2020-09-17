import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MovieContainer from './content/movieContainer';
import MovieFooter from './footer/movieFooter';
import MovieSearch from './header/movieSearch';
import MovieDetails from './header/movieDetails';
import NotFound from './content/notFound';

import './App.css';

function App() {
  return (
    <>
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

export default App;
