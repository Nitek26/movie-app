import ACTIONS from './actionTypes'

const viewReducer = (state = {}, action) => {
    switch(action.type){
        case ACTIONS.SET_ADD_MODAL_VISIBILITY: {
            const visible = action.payload.visible;

            return {
                ...state,
                addModalVisible: visible
            };
        }
        case ACTIONS.SELECT_MOVIE: {
            return {
                ...state,
                selectedMovie: action.payload.movie
            }
        }
        case ACTIONS.DESELECT_MOVIE: {
            return {
                ...state,
                selectedMovie: undefined
            }
        }
        default: {
            return state;
        }
    }
};

const movieReducer = (state = {}, action) => {
    switch(action.type){
        case ACTIONS.LOAD_MOVIES_IN_PROGRESS: {
            return {
                ...state,
                areMoviesLoading: true
            };
        }

        case ACTIONS.LOAD_MOVIES_SUCCESS: {
            return {
                ...state,
                areMoviesLoading: false,
                movies: action.payload.movies.data,
                totalMovies: action.payload.movies.totalAmount
            }; 
        }

        case ACTIONS.LOAD_MOVIES_FAILURE: {
            console.log("fail");
            return {
                ...state,
                areMoviesLoading: false
            };
        }
        default: {
            return state;
        }
    }
};

export { viewReducer, movieReducer };