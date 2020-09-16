import React from 'react';
import { connect } from 'react-redux';

import AddEditModal from '../modals/addEditModal';
import { setAddModalVisbility } from '../store/actions'
import { getAddModalVisbility } from '../store/selectors'

import './movieSearch.css';

const MovieSearch = (props) => {
    return (
        <div className="movieSearch">
            <img src="/logo.png" alt="Application logo"></img>
            <div className="addMovieContainer"><button onClick={() => props.openModal()}>+ Add movie</button></div>
            <div className="headerText">
                Find your movie
                </div>
            <form className="searchForm">
                <input className="searchInput" type="text" placeholder="What do you want to watch?"></input>
                <button className="searchButton">Search</button>
            </form>
            <AddEditModal isVisible={props.addModalVisible} closeModal={() => props.closeModal()}  />
        </div>
    );
};

const mapStateToProps = state => {
    const addModalVisible = getAddModalVisbility(state);

    return { addModalVisible }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(setAddModalVisbility(false)),
        openModal: () => dispatch(setAddModalVisbility(true))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);