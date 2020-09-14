import ACTIONS from './actionTypes'

const loadMoviesInProgress = () => ({
    type: ACTIONS.LOAD_MOVIES_IN_PROGRESS
});

const loadMoviesSuccess =  movies=> ({
    type: ACTIONS.LOAD_MOVIES_SUCCESS,
    payload:{
        movies
    }
});

const loadMoviesFailure = () => ({
    type: ACTIONS.LOAD_MOVIES_FAILURE
});

const deleteMovie = (id) => ({
    type: ACTIONS.DELETE_MOVIE,
    payload:{
        id
    }
});

const moviesChanged = () => ({
    type: ACTIONS.MOVIES_CHANGED
});

const setFilter = filterBy => ({
    type: ACTIONS.SET_FILTER,
    payload:{
        filterBy
    }
});

const setSort = sortBy => ({
    type: ACTIONS.SET_SORT,
    payload:{
        sortBy
    }
});

const setAddModalVisbility = (visible) => ({
    type: ACTIONS.SET_ADD_MODAL_VISIBILITY,
    payload:{
        visible
    }
});

const setDeleteModalVisbility = (id, visible) => ({
    type: ACTIONS.SET_DELETE_MODAL_VISIBILITY,
    payload:{
        id
    }
});

const selectMovie = (movie) => ({
    type: ACTIONS.SELECT_MOVIE,
    payload:{
        movie
    }
});

const deselectMovie = () => ({
    type: ACTIONS.DESELECT_MOVIE
});

const showOptions = (id) => ({
    type: ACTIONS.SHOW_OPTIONS,
    payload:{
        id
    }
});

const hideOptions = () => ({
    type: ACTIONS.HIDE_OPTIONS
});

export { 
    loadMoviesInProgress, 
    loadMoviesSuccess, 
    loadMoviesFailure,
    deleteMovie,
    moviesChanged, 
    setFilter,
    setSort,
    setAddModalVisbility,
    setDeleteModalVisbility, 
    selectMovie, 
    deselectMovie,
    showOptions, 
    hideOptions 
};