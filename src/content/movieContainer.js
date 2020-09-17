import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useLocation } from "react-router-dom";

import CategoryFilter from './categoryFilter';
import SearchSorter from './searchSorter';
import Movie from './movie';
import DeleteConfirmation from '../modals/deleteConfirmation';
import AddEditModal from '../modals/addEditModal';

import { getMovies, getFilterBy, getSortBy, getTotalMovies, getOptionsOpenedFor, getDeleteConfirmationOpenedFor, getEditModalVisible, getAreMoviesLoading, getOperationCounter } from '../store/selectors'
import { setFilter, setSort, showOptions, hideOptions, setDeleteModalVisbility, setEditModalVisbility } from '../store/actions';
import { loadMovies, deleteMovie } from '../store/thunks';

import './movieContainer.css';

const MovieContainer = ({
    movies,
    areMoviesLoading,
    filter,
    sort,
    setFilter,
    setSort,
    totalMovies,
    showOptions,
    hideOptions,
    optionsOpenFor,
    deleteConfirmationOpenedFor,
    showDeleteConfirmModal,
    hideDeleteConfirmModal,
    deleteMovie,
    showEditModal,
    closeEditModal,
    editModalVisible,
    startLoadingMovies,
    operationCounter
}) => {

    let { searchTerm } = useParams();
    let location = useLocation();

    useEffect(() => {
        if (searchTerm || location.pathname === '/') {
            startLoadingMovies(filter, sort, searchTerm);
        } 
    }, [startLoadingMovies, filter, sort, searchTerm, operationCounter, location]);

    let modal = ''
    if (editModalVisible) {
        modal = <AddEditModal isVisible={editModalVisible} closeModal={closeEditModal} />
    }

    return (
        <>
            <div className={'loadingMessage ' + (areMoviesLoading ? 'visible' : '')}>
                Loading...
            </div>
            <div className="movieContainer">
                <div className="filters">
                    <CategoryFilter filter={filter} setCategoryFilter={setFilter} disabled={!searchTerm} />
                    <SearchSorter sortBy={sort} setSortBy={setSort} disabled={!searchTerm} />
                </div>
                {
                    movies.length > 0
                        ? (
                            <>
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
                                                showEditModal={showEditModal} />
                                        );
                                    })}
                                </div>
                            </>)
                        : <div className="noResults">No movies found</div>
                }
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
    const editModalVisible = getEditModalVisible(state);
    const areMoviesLoading = getAreMoviesLoading(state);
    const operationCounter = getOperationCounter(state);

    return { movies, filter, sort, totalMovies, optionsOpenFor, deleteConfirmationOpenedFor, editModalVisible, areMoviesLoading, operationCounter }
};

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setFilter(filter)),
    setSort: sort => dispatch(setSort(sort)),
    showOptions: id => dispatch(showOptions(id)),
    hideOptions: () => dispatch(hideOptions()),
    showDeleteConfirmModal: (id) => dispatch(setDeleteModalVisbility(id)),
    hideDeleteConfirmModal: () => dispatch(setDeleteModalVisbility(0)),
    deleteMovie: (id) => dispatch(deleteMovie(id)),
    showEditModal: (movie) => dispatch(setEditModalVisbility(movie)),
    closeEditModal: () => dispatch(setEditModalVisbility()),
    startLoadingMovies: (filter, sort, searchTerm) => dispatch(loadMovies(filter, sort, searchTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);