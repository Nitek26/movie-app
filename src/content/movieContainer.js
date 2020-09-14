import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';


import CategoryFilter from './categoryFilter';
import SearchSorter from './searchSorter';
import Movie from './movie';
import DeleteConfirmation from '../modals/deleteConfirmation';
import AddEditModal from '../modals/addEditModal';

import useToggle from '../utils/useToggle'

import { getMovies, getFilterBy } from '../utils/store/selectors'
import { setFilter, selectMovie } from '../utils/store/actions';

import './movieContainer.css';



const MovieContainer = ({ movies, filter, selectMovie, setFilter }) => {
    const [modalOpened, setModalOpened] = useState([]);
    const [confirmModalShown, toggleConfirmDeleteModal] = useToggle(false);
    const [editModalShown, toggleEditModal] = useToggle(false);
    const [movieToEdit, setMovieToEdit] = useState(undefined);
    const [sortBy, setSortBy] = useState('release_date');

    const toggleDropdownModal = useCallback((id) => {
        let currentState = modalOpened;
        const newState = currentState.includes(id) ? currentState.filter(i => i !== id) : [...currentState, id]

        setModalOpened(newState);
    }, [modalOpened]);

    const toggleEditModalWithSet = (movie) => {
        toggleEditModal(editModalShown);
        setMovieToEdit(movie);
    };

    const sort = useCallback((a, b) => {
        if (a[sortBy] > b[sortBy]) {
            return 1;
        }

        if (a[sortBy] < b[sortBy]) {
            return -1;
        }

        return 0;
    }, [sortBy]);

    let moviesToShow = movies.sort(sort);

    let modal = ''
    if (movieToEdit) {
        modal = <AddEditModal isVisible={editModalShown} movie={movieToEdit} closeModal={toggleEditModalWithSet} />
    }

    return (
        <>
            <div className="movieContainer">
                <div className="filters">
                    <CategoryFilter filter={filter} setCategoryFilter={setFilter} />
                    <SearchSorter sortBy={sortBy} setSortBy={setSortBy} />
                </div>
                <div className="searchCount">
                    <span>{moviesToShow.length}</span> movies found
                </div>
                <div className="searchResults">
                    {moviesToShow.map(movie => {
                        return (
                            <Movie
                                key={movie.id}
                                movie={movie}
                                toggleDropdownModal={toggleDropdownModal}
                                modalOpened={modalOpened.includes(movie.id)}
                                toggleConfirmDeleteModal={toggleConfirmDeleteModal}
                                toggleEditModal={toggleEditModalWithSet}
                                selectMovie={selectMovie} />
                        );
                    })}
                </div>
            </div>
            <DeleteConfirmation isVisible={confirmModalShown} toggleConfirmDeleteModal={toggleConfirmDeleteModal} />
            {modal}
        </>
    );
};

const mapStateToProps = state => {
    const movies = getMovies(state);
    const filter = getFilterBy(state);
    return { movies, filter }
};

const mapDispatchToProps = dispatch => ({
    selectMovie: (movie) => dispatch(selectMovie(movie)),
    setFilter: filter => dispatch(setFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);