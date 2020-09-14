import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';


import CategoryFilter from './categoryFilter';
import SearchSorter from './searchSorter';
import Movie from './movie';
import DeleteConfirmation from '../modals/deleteConfirmation';
import AddEditModal from '../modals/addEditModal';

import useToggle from '../utils/useToggle'

import { getMovies, getFilterBy, getSortBy, getTotalMovies, getOptionsOpenedFor } from '../utils/store/selectors'
import { setFilter, setSort, selectMovie, showOptions, hideOptions } from '../utils/store/actions';

import './movieContainer.css';

const MovieContainer = ({ movies, filter, sort, selectMovie, setFilter, setSort, totalMovies, showOptions, hideOptions, optionsOpenFor }) => {
    //const [modalOpened, setModalOpened] = useState([]);
    const [confirmModalShown, toggleConfirmDeleteModal] = useToggle(false);
    const [editModalShown, toggleEditModal] = useToggle(false);
    const [movieToEdit, setMovieToEdit] = useState(undefined);

    // const toggleDropdownModal = useCallback((id) => {
    //     let currentState = modalOpened;
    //     const newState = currentState.includes(id) ? currentState.filter(i => i !== id) : [...currentState, id]

    //     setModalOpened(newState);
    // }, [modalOpened]);

    const toggleEditModalWithSet = (movie) => {
        toggleEditModal(editModalShown);
        setMovieToEdit(movie);
    };

    let modal = ''
    if (movieToEdit) {
        modal = <AddEditModal isVisible={editModalShown} movie={movieToEdit} closeModal={toggleEditModalWithSet} />
    }

    return (
        <>
            <div className="movieContainer">
                <div className="filters">
                    <CategoryFilter filter={filter} setCategoryFilter={setFilter} />
                    <SearchSorter sortBy={sort} setSortBy={setSort} />
                </div>
                <div className="searchCount">
                    <span>{totalMovies}</span> movies found
                </div>
                <div className="searchResults">
                    {movies.map(movie => {
                        return (
                            <Movie
                                key={movie.id}
                                movie={movie}
                                showOptions={showOptions}
                                hideOptions={hideOptions}
                                modalOpened={optionsOpenFor === movie.id}
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
    const sort = getSortBy(state);
    const totalMovies = getTotalMovies(state);
    const optionsOpenFor = getOptionsOpenedFor(state);

    return { movies, filter, sort, totalMovies, optionsOpenFor }
};

const mapDispatchToProps = dispatch => ({
    selectMovie: (movie) => dispatch(selectMovie(movie)),
    setFilter: filter => dispatch(setFilter(filter)),
    setSort: sort => dispatch(setSort(sort)),
    showOptions: id => dispatch(showOptions(id)),
    hideOptions: () => dispatch(hideOptions())
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);