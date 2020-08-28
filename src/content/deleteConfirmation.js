import React from 'react';

import './deleteConfirmation.css'

class DeleteConfirmation extends React.Component {

    render(){
        return (
            <div className={'deleteConfirmation' + (this.props.isVisible ? ' visible' : '')}>
                <div className="confirmModal">
                    <div className="close" onClick={() => this.props.toggleConfirmDeleteModal(null)}>X</div>
                    <div>delete movie</div>
                    <div>Are you sure you want to delete this movie?</div>
                    <button onClick={() => this.props.toggleConfirmDeleteModal(null)}>confirm</button>
                </div>
            </div>
        );
    }
}

export default DeleteConfirmation;