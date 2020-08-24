import React from 'react';
import PropTypes from 'prop-types';

import './movie.css';

const Movie = (props) =>  {
        return (
            <div className="movie">
                <img src={props.poster_path} alt={`${props.title} poster`}></img>
                <button className="action_button">...</button>
                <br/>
                <span className="title">{props.title}</span>
                <span className="release_date">{props.release_date.getFullYear()}</span>
                <br />
                <span className="genres">{props.genres.join(', ')}</span>
            </div>)
}

Movie.propTypes = {
    title: PropTypes.string,
    genres: PropTypes.array,
    poster_path: PropTypes.string,
    release_date: PropTypes.instanceOf(Date)
  };

export default Movie;