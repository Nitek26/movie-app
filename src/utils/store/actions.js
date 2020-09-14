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

const setFilter = filterBy => ({
    type: ACTIONS.SET_FILTER,
    payload:{
        filterBy
    }
});

export { 
    loadMoviesInProgress, 
    loadMoviesSuccess, 
    loadMoviesFailure, 
    setAddModalVisbility, 
    selectMovie, 
    deselectMovie,
    setFilter 
};