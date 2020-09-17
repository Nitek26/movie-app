import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { useParams } from "react-router-dom";

import AddEditModal from '../modals/addEditModal';
import { setAddModalVisbility } from '../store/actions'
import { getAddModalVisbility } from '../store/selectors'

import './movieSearch.css';

const MovieSearch = (props) => {

    const {searchTerm} = useParams();

    return (
        <div className="movieSearch">
            <img src="/logo.png" alt="Application logo"></img>
            <div className="addMovieContainer"><button onClick={() => props.openModal()}>+ Add movie</button></div>
            <div className="headerText">
                Find your movie
                </div>
                <Formik
                    initialValues={{ searchTerm: (searchTerm || '') }}
                    onSubmit={(values) => {
                    window.location.pathname = `/search/${values.searchTerm}`;
                }}>
                    <Form className="searchForm">
                        <Field className="searchInput" placeholder="What do you want to watch?" name="searchTerm"></Field>
                        <button className="searchButton" type="submit">Search</button>
                    </Form>
                </Formik>
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
        openModal: () => dispatch(setAddModalVisbility(true)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);