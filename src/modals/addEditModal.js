import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

import { getMovieToEdit } from '../store/selectors';
import { addMovie, editMovie } from '../store/thunks';

import './addEditModal.css'

const AddEditModal = ({ movie, closeModal, isVisible, addMovie, editMovie }) => {

    const genres = [
        "Adventure",
        "Science Fiction",
        "Action",
        "Comedy",
        "Family",
        "Animation",
        "Fantasy",
        "Drama",
        "Romance",
        "Documentary"
    ];

    const closeAndReset = (resetForm) =>{
        resetForm({});
        closeModal();
    }

    const isEditMode = !!movie.id;

    const signupSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required'),
        release_date: Yup.string()
            .required('Release date is required')
            .matches(/^(\d{4})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, { excludeEmptyString: true, message: 'Date must be in format YYYY-MM-DD' }),
        poster_path: Yup.string()
            .required('Poster path is required')
            .url(),
        genres: Yup.array()
            .min(1, 'Select at least one genre'),
        overview: Yup.string()
            .required('Overview is required'),
        runtime: Yup.number()
            .required('Runtime is required')
            .min(1, 'Runtime must be at least 1 minute'),
    });

    const initialValues = { ...movie };

    return (
        <div className={'addEditContainer' + (isVisible ? ' visible' : '')}>
            <div className="addEditModal">
                <Formik
                    initialValues={initialValues}
                    validationSchema={signupSchema}
                    onSubmit={(values) => {
                        isEditMode ? editMovie(values) : addMovie(values);
                    }}>
                    {({ resetForm }) => (
                        <>
                            <button className="close" onClick={() => { closeAndReset(resetForm) }}>X</button>
                            <div className="header">{isEditMode ? 'edit' : 'add'} movie</div>
                            <Form>
                                <div className="body">
                                    {isEditMode ? (<label> movie id
                                        <input type="text" name="id" defaultValue={movie.id} disabled="disabled" />
                                    </label>) : ''}
                                    <label> title
                                <Field type="text" name="title"></Field>
                                    </label>
                                    <ErrorMessage name="title" component="div" />

                                    <label> release date
                                <Field type="text" name="release_date"></Field>
                                    </label>
                                    <ErrorMessage name="release_date" component="div" />

                                    <label> movie url
                                <Field type="text" name="poster_path"></Field>
                                    </label>
                                    <ErrorMessage name="poster_path" component="div" />

                                    <label> genre
                                <Field as="select" size="1" name="genres" multiple="multiple">
                                            {genres.map((genre) => {
                                                return <option key={genre} value={genre}>{genre}</option>
                                            })}
                                        </Field>
                                    </label>
                                    <ErrorMessage name="genres" component="div" />

                                    <label> overview
                                <Field type="text" name="overview" />
                                    </label>
                                    <ErrorMessage name="overview" component="div" />

                                    <label> runtime
                                <Field type="number" name="runtime" />
                                    </label>
                                    <ErrorMessage name="runtime" component="div" />
                                </div>
                                <div className="buttons">
                                    <button className="reset" type="reset" onClick={() => resetForm(initialValues)}>reset</button>
                                    <button className="confirm" type="submit">{isEditMode ? 'save' : 'submit'}</button>
                                </div>
                            </Form>
                        </>
                    )}
                </Formik>
            </div>
        </div>
    );
};

AddEditModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    const movie = getMovieToEdit(state);

    return { movie }
};

const mapDispatchToProps = dispatch => ({
    addMovie: (movie) => dispatch(addMovie(movie)),
    editMovie: (movie) => dispatch(editMovie(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEditModal);