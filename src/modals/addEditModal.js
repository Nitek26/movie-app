import React from 'react';
import PropTypes from 'prop-types';

import './addEditModal.css'

const AddEditModal = (props) => {
    return (
        <div className={'addEditContainer' + (props.isVisible ? ' visible' : '')}>
            <div className="addEditModal">
                EDIT!!!!
                    <button className="close" onClick={() => props.toggleModal()}>X</button>
                <div className="header">delete movie</div>
                <div className="body">Are you sure you want to delete this movie?</div>
                <button className="confirm" onClick={() => props.toggleModal()}>confirm</button>
            </div>
        </div>
    );
};

AddEditModal.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired
};

export default AddEditModal;