import React, { useState, useEffect, useCallback } from 'react';

import CategoryFilter from './categoryFilter';
import SearchSorter from './searchSorter';
import Movie from './movie';
import DeleteConfirmation from '../modals/deleteConfirmation';
import AddEditModal from '../modals/addEditModal';

import movieList from '../movies' 

import './movieContainer.css';

const MovieContainer = (props) => {
    const [movies, setMovies] = useState([]);
    const [modalOpened, setModalOpened] = useState([]);
    const [confirmModalShown, setConfirmModalShown] = useState(false);
    const [editModalShown, setEditModalShown] = useState(false);
    const [movieToEdit, setMovieToEdit] = useState(undefined);
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [sortBy, setSortBy] = useState('release_date');

    useEffect(() => {
        setMovies(movieList);
    }, []);

    const toggleDropdownModal = useCallback((id) => {
        let currentState = modalOpened;
        const newState = currentState.includes(id) ? currentState.filter(i => i !== id) : [...currentState, id]

        setModalOpened(newState);
    }, [modalOpened]);

    const toggleConfirmDeleteModal = useCallback(() => {
        setConfirmModalShown(confirmModalShown => !confirmModalShown);
    }, []);

    const toggleEditModal = useCallback((movie) => {
        setEditModalShown(editModalShown => !editModalShown);
        setMovieToEdit(movie);
    }, []);

    const sort = useCallback((a, b) => {
        if (a[sortBy] > b[sortBy]) {
            return 1;
        }

        if (a[sortBy] < b[sortBy]) {
            return -1;
        }

        return 0;
    }, [sortBy]);

    let moviesToShow = movies.filter(movie => {
        if (categoryFilter === 'all') {
            return true;
        } else {
            return movie.genres.map(genre => genre.toLowerCase()).includes(categoryFilter);
        }
    });

    moviesToShow = moviesToShow.sort(sort);

    let modal = ''
    if (movieToEdit) {
        modal = <AddEditModal isVisible={editModalShown} movie={movieToEdit} toggleModal={toggleEditModal} />
    }

    return (
        <>
            <div className="movieContainer">
                <div className="filters">
                    <CategoryFilter filter={categoryFilter} setCategoryFilter={setCategoryFilter} />
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
                                toggleEditModal={toggleEditModal}
                                selectMovie={props.selectMovie} />
                        );
                    })}
                </div>
            </div>
            <DeleteConfirmation isVisible={confirmModalShown} toggleConfirmDeleteModal={toggleConfirmDeleteModal} />
            {modal}
        </>
    );
}

export default MovieContainer;