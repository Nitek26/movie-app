import React from 'react';
import PropTypes from 'prop-types';

import './deleteConfirmation.css'

const DeleteConfirmation = (props) => {
    return (
        <div className={'deleteConfirmation' + (props.isVisible ? ' visible' : '')}>
            <div className="confirmModal">
                <button className="close" onClick={() => props.hideDeleteConfirmModal()}>X</button>
                <div className="header">delete movie</div>
                <div className="body">Are you sure you want to delete this movie?</div>
                <button className="confirm" onClick={() => props.deleteMovie(props.movieToDelete)}>confirm</button>
            </div>
        </div>
    );
};

DeleteConfirmation.propTypes = {
    hideDeleteConfirmModal: PropTypes.func.isRequired,
    deleteMovie: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired,
    movieToDelete: PropTypes.number.isRequired
};

export default DeleteConfirmation;