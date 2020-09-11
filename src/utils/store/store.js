import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { modalReducer, movieReducer } from './reducers';

const initialState = {
    modalReducer: {
        addModalVisible: false
    },
    movieReducer: {
        areMoviesLoading: false,
        movies:[],
        totalMovies: 0
    }
    // selectedMovie: undefined,
    // movies:[],
    // modalOpened:[],
    // confirmModalShown: false,
    // editModalShown: false,
    // movieToEdit: undefined,
    // categoryFilter: 'all',
    // sortBy:'release_date',
};

const rootReducer = combineReducers({
    modalReducer, 
    movieReducer
});

export const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(thunk));