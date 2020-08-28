import React from 'react';

import './addEditModal.css'

class AddEditModal extends React.Component {

    render(){
        return (
            <div className={'addEditContainer' + (this.props.isVisible ? ' visible' : '')}>
                <div className="addEditModal">
                    EDIT!!!!
                    <button className="close" onClick={() => this.props.toggleModal()}>X</button>
                    <div className="header">delete movie</div>
                    <div className="body">Are you sure you want to delete this movie?</div>
                    <button className="confirm" onClick={() => this.props.toggleModal()}>confirm</button>
                </div>
            </div>
        );
    }
}

export default AddEditModal;