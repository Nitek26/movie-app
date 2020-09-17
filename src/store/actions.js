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

export const getMovieCompleted = movie => ({
    type: ACTIONS.GET_MOVIE_COMPLETED,
    payload:{
        movie
    }
});

export const moviesChanged = () => ({
    type: ACTIONS.MOVIES_CHANGED
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

export const setEditModalVisbility = (movie) => ({
    type: ACTIONS.SET_EDIT_MODAL_VISIBILITY,
    payload:{
        movie
    }
});

export const setDeleteModalVisbility = (id) => ({
    type: ACTIONS.SET_DELETE_MODAL_VISIBILITY,
    payload:{
        id
    }
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
