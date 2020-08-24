import React from 'react';
import PropTypes from 'prop-types';

import './movie.css';

class Movie extends React.Component {
    render() {
        return (
            <div className="movie">
                <img src={this.props.poster_path} alt={`${this.props.title} poster`}></img>
                <br/>
                <span className="title">{this.props.title}</span>
                <span className="release_date">{this.props.release_date.getFullYear()}</span>
                <br />
                <span className="genres">{this.props.genres.join(', ')}</span>
            </div>)
    }
}

Movie.propTypes = {
    title: PropTypes.string,
    genres: PropTypes.array,
    poster_path: PropTypes.string,
    release_date: PropTypes.instanceOf(Date)
  };

export default Movie;