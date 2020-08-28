import React from 'react';

import './deleteConfirmation.css'

class DeleteConfirmation extends React.Component {

    render(){
        return (
            <div className={'deleteConfirmation' + (this.props.isVisible ? ' visible' : '')}>
                <div className="confirmModal">
                    <button className="close" onClick={() => this.props.toggleConfirmDeleteModal(null)}>X</button>
                    <div className="header">delete movie</div>
                    <div className="body">Are you sure you want to delete this movie?</div>
                    <button className="confirm" onClick={() => this.props.toggleConfirmDeleteModal(null)}>confirm</button>
                </div>
            </div>
        );
    }
}

export default DeleteConfirmation;