import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import './movie.css';

const Movie = (props) => {

    const openConfirmDeleteModal = useCallback((id) => {
        props.toggleDropdownModal(id);
        props.toggleConfirmDeleteModal(id);
    }, [props]);

    const openEditModal = useCallback((movie) => {
        props.toggleDropdownModal(movie.id);
        props.toggleEditModal(movie);
    }, [props]);

    return (
        <div className="movie">
            <img src={props.movie.poster_path} alt={`${props.movie.title} poster`} onClick={() => props.selectMovie(props.movie)}></img>
            <button className="actionButton" onClick={() => props.showOptions(props.movie.id)}>...</button>
            <div className={"actions " + (props.modalOpened ? "opened" : null)}>
                <span className="close" onClick={() => props.hideOptions()}>X</span>
                <span className="action" onClick={() => openEditModal(props.movie)}>Edit</span>
                <span className="action" onClick={() => openConfirmDeleteModal(props.movie.id)}>Delete</span>
            </div>
            <br />
            <span className="title">{props.movie.title}</span>
            <span className="releaseDate">{new Date(props.movie.release_date).getFullYear()}</span>
            <br />
            <span className="genres">{props.movie.genres.join(', ')}</span>
        </div>
    )
}

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        poster_path: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        id: PropTypes.number,
    }).isRequired,
    showOptions: PropTypes.func.isRequired,
    modalOpened: PropTypes.bool.isRequired,
    toggleConfirmDeleteModal: PropTypes.func.isRequired,
    toggleEditModal: PropTypes.func.isRequired
};

export default Movie;