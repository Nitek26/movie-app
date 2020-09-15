import ACTIONS from './actionTypes'

export const loadMoviesInProgress = () => ({
    type: ACTIONS.LOAD_MOVIES_IN_PROGRESS
});

export const loadMoviesSuccess =  movies=> ({
    type: ACTIONS.LOAD_MOVIES_SUCCESS,
    payload:{
        movies
    }
});

export const loadMoviesFailure = () => ({
    type: ACTIONS.LOAD_MOVIES_FAILURE
});

export const deleteMovie = (id) => ({
    type: ACTIONS.DELETE_MOVIE,
    payload:{
        id
    }
});

export const addMovie = (movie) => ({
    type: ACTIONS.ADD_MOVIE,
    payload:{
        movie
    }
});

export const movieValueChanged = (name, value) => ({
    type: ACTIONS.MOVIE_VALUE_CHANGED,
    payload:{
        name,
        value
    }
});

export const moviesChanged = () => ({
    type: ACTIONS.MOVIES_CHANGED
});

export const resetMovie = (movie) => ({
    type: ACTIONS.RESET_MOVIE,
    payload:{
        movie
    }
});

export const setFilter = filterBy => ({
    type: ACTIONS.SET_FILTER,
    payload:{
        filterBy
    }
});

export const setSort = sortBy => ({
    type: ACTIONS.SET_SORT,
    payload:{
        sortBy
    }
});

export const setAddModalVisbility = (visible) => ({
    type: ACTIONS.SET_ADD_MODAL_VISIBILITY,
    payload:{
        visible
    }
});

export const setDeleteModalVisbility = (id, visible) => ({
    type: ACTIONS.SET_DELETE_MODAL_VISIBILITY,
    payload:{
        id
    }
});

export const selectMovie = (movie) => ({
    type: ACTIONS.SELECT_MOVIE,
    payload:{
        movie
    }
});

export const deselectMovie = () => ({
    type: ACTIONS.DESELECT_MOVIE
});

export const showOptions = (id) => ({
    type: ACTIONS.SHOW_OPTIONS,
    payload:{
        id
    }
});

export const hideOptions = () => ({
    type: ACTIONS.HIDE_OPTIONS
});
