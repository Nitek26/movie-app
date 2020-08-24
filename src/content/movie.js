import React from 'react';
import PropTypes from 'prop-types';

import './movie.css';

const Movie = (props) =>  {
        return (
            <div className="movie">
                <img src={props.posterPath} alt={`${props.title} poster`}></img>
                <button className="action_button" onClick={props.toggleModal}>...</button>
                <div className={"actions " + (props.modalOpened ? "opened" : null)}>
                    <span className="close" onClick={props.toggleModal}>X</span>
                    <span className="action">Edit</span>
                    <span className="action">Delete</span>
                </div>
                <br/>
                <span className="title">{props.title}</span>
                <span className="release_date">{props.releaseDate.getFullYear()}</span>
                <br />
                <span className="genres">{props.genres.join(', ')}</span>
            </div>)
}

Movie.propTypes = {
    title: PropTypes.string,
    genres: PropTypes.array,
    posterPath: PropTypes.string,
    releaseDate: PropTypes.instanceOf(Date),
    toggleModal: PropTypes.func
  };

export default Movie;