import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { viewReducer, movieReducer } from './reducers';

const initialState = {
    viewReducer: {
        addModalVisible: false, 
        selectedMovie: undefined
    },
    movieReducer: {
        areMoviesLoading: false,
        movies:[],
        totalMovies: 0
    }
    // selectedMovie: undefined,
    // modalOpened:[],
    // confirmModalShown: false,
    // editModalShown: false,
    // movieToEdit: undefined,
    // categoryFilter: 'all',
    // sortBy:'release_date',
};

const rootReducer = combineReducers({
    viewReducer, 
    movieReducer
});

export const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(thunk));