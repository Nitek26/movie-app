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

const hideOptions = (id) => ({
    type: ACTIONS.HIDE_OPTIONS
});

export { 
    loadMoviesInProgress, 
    loadMoviesSuccess, 
    loadMoviesFailure, 
    setFilter,
    setSort,
    setAddModalVisbility, 
    selectMovie, 
    deselectMovie,
    showOptions, 
    hideOptions 
};