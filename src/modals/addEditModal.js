import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMovieToEdit } from '../utils/store/selectors';
import { movieValueChanged, resetMovie } from '../utils/store/actions';
import { addMovie } from '../utils/store/thunks';

import './addEditModal.css'

const AddEditModal = ({ movie, closeModal, isVisible, movieValueChanged, addMovie, resetMovie }) => {

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

    const isEditMode = !!movie.id;

    const handleChange = (event) => {
        let value = event.target.value;

        if (event.target.name === 'genres') {
            value = [...event.target.selectedOptions].map(o => o.value);
        }

        if (event.target.name === 'runtime') {
            value = parseInt(value, 10);
        }
        movieValueChanged(event.target.name, value);
    };

    const reset = () => {
        isEditMode
            ? console.log('reset')
            : resetMovie({
                title: '',
                overview: '',
                release_date: '',
                runtime: '',
                genres: [],
                poster_path: ''
            });
    }

    const submit = () => {
        isEditMode ? closeModal() : addMovie(movie);
    };

    return (
        <div className={'addEditContainer' + (isVisible ? ' visible' : '')}>
            <div className="addEditModal">
                <button className="close" onClick={() => closeModal()}>X</button>
                <div className="header">{isEditMode ? 'edit' : 'add'} movie</div>
                <div className="body">
                    {isEditMode ? (<label> movie id
                        <input type="text" name="id" defaultValue={movie.id} disabled="disabled" />
                    </label>) : ''}
                    <label> title
                        <input type="text" name="title" value={movie.title} onChange={handleChange} />
                    </label>

                    <label> release date
                        <input type="text" name="release_date" value={movie.release_date} onChange={handleChange} />
                    </label>

                    <label> movie url
                        <input type="text" name="poster_path" value={movie.poster_path} onChange={handleChange} />
                    </label>

                    <label> genre
                        <select multiple="multiple" size="1" name="genres" value={movie.genres} onChange={handleChange}>
                            {genres.map((genre) => {
                                return <option key={genre} value={genre}>{genre}</option>
                            }
                            )}
                        </select>
                    </label>

                    <label> overview
                        <input type="text" name="overview" value={movie.overview} onChange={handleChange} />
                    </label>

                    <label> runtime
                        <input type="number" name="runtime" value={movie.runtime} onChange={handleChange} />
                    </label>
                </div>
                <div className="buttons">
                    <button className="reset" onClick={() => reset()}>reset</button>
                    <button className="confirm" onClick={() => submit()}>{isEditMode ? 'save' : 'submit'}</button>
                </div>

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
    movieValueChanged: (name, value, isArray = false) => dispatch(movieValueChanged(name, value, isArray)),
    addMovie: (movie) => dispatch(addMovie(movie)),
    resetMovie: (movie) => dispatch(resetMovie(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEditModal);