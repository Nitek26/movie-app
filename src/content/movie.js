import React from 'react';
import PropTypes from 'prop-types';


import './movie.css';

const Movie = (props) => {

    const openConfirmDeleteModal = (id) =>{
        props.toggleDropdownModal(id)
        props.toggleConfirmDeleteModal(id)
    }

    return (
        <div className="movie">
            <img src={props.posterPath} alt={`${props.title} poster`}></img>
            <button className="actionButton" onClick={() => props.toggleDropdownModal(props.id)}>...</button>
            <div className={"actions " + (props.modalOpened ? "opened" : null)}>
                <span className="close" onClick={() => props.toggleDropdownModal(props.id)}>X</span>
                <span className="action">Edit</span>
                <span className="action" onClick={() => openConfirmDeleteModal(props.id)}>Delete</span>
            </div>
            <br />
            <span className="title">{props.title}</span>
            <span className="releaseDate">{props.releaseDate.getFullYear()}</span>
            <br />
            <span className="genres">{props.genres.join(', ')}</span>
        </div>
    )
}

Movie.propTypes = {
    title: PropTypes.string,
    genres: PropTypes.array,
    posterPath: PropTypes.string,
    releaseDate: PropTypes.instanceOf(Date),
    toggleModal: PropTypes.func,
    id: PropTypes.number,
    modalOpened: PropTypes.bool
};

export default Movie;