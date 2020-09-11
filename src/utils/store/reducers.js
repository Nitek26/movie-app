import ACTIONS from './actionTypes'

const modalReducer = (state = {}, action) => {
    switch(action.type){
        case ACTIONS.SET_ADD_MODAL_VISIBILITY: {
            const visible = action.payload.visible;

            return {
                ...state,
                addModalVisible: visible
            };
        }
        default: {
            return state;
        }
    }
};

const movieReducer = (state = {}, action) => {
    switch(action.type){
        case ACTIONS.LOAD_MOVIES_IN_PROGRESS: {
            console.log("in progress");
            return {
                ...state,
                areMoviesLoading: true
            };
        }

        case ACTIONS.LOAD_MOVIES_SUCCESS: {
            console.log("done");
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

export { modalReducer, movieReducer };