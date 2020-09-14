import React, { useState } from 'react';
import { connect } from 'react-redux';


import CategoryFilter from './categoryFilter';
import SearchSorter from './searchSorter';
import Movie from './movie';
import DeleteConfirmation from '../modals/deleteConfirmation';
import AddEditModal from '../modals/addEditModal';

import useToggle from '../utils/useToggle'

import { getMovies, getFilterBy, getSortBy, getTotalMovies, getOptionsOpenedFor, getDeleteConfirmationOpenedFor } from '../utils/store/selectors'
import { setFilter, setSort, selectMovie, showOptions, hideOptions, setDeleteModalVisbility } from '../utils/store/actions';
import { deleteMovie } from '../utils/store/thunks';

import './movieContainer.css';

const MovieContainer = ({ 
    movies, 
    filter, 
    sort, 
    selectMovie, 
    setFilter, 
    setSort, 
    totalMovies, 
    showOptions, 
    hideOptions, 
    optionsOpenFor, 
    deleteConfirmationOpenedFor,
    showDeleteConfirmModal, 
    hideDeleteConfirmModal,
    deleteMovie 
}) => {
    const [editModalShown, toggleEditModal] = useToggle(false);
    const [movieToEdit, setMovieToEdit] = useState(undefined);

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
                                deleteMovie={showDeleteConfirmModal}
                                toggleEditModal={toggleEditModalWithSet}
                                selectMovie={selectMovie} />
                        );
                    })}
                </div>
            </div>
            <DeleteConfirmation 
                isVisible={!!deleteConfirmationOpenedFor} 
                movieToDelete={deleteConfirmationOpenedFor} 
                hideDeleteConfirmModal={hideDeleteConfirmModal}
                deleteMovie={deleteMovie}
                 />
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
    const deleteConfirmationOpenedFor = getDeleteConfirmationOpenedFor(state);

    return { movies, filter, sort, totalMovies, optionsOpenFor, deleteConfirmationOpenedFor }
};

const mapDispatchToProps = dispatch => ({
    selectMovie: (movie) => dispatch(selectMovie(movie)),
    setFilter: filter => dispatch(setFilter(filter)),
    setSort: sort => dispatch(setSort(sort)),
    showOptions: id => dispatch(showOptions(id)),
    hideOptions: () => dispatch(hideOptions()),
    showDeleteConfirmModal: (id) => dispatch(setDeleteModalVisbility(id)),
    hideDeleteConfirmModal: () => dispatch(setDeleteModalVisbility(0)),
    deleteMovie: (id) => dispatch(deleteMovie(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);