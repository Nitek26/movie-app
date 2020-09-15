import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { viewReducer, movieReducer } from './reducers';

const initialState = {
    viewReducer: {
        addModalVisible: false,
        selectedMovie: undefined,
        optionsOpenedFor: 0,
        deleteConfirmationOpenedFor: 0
    },
    movieReducer: {
        areMoviesLoading: false,
        operationCounter: 0,
        movies:[],
        totalMovies: 0,
        filterBy: 'all',
        sortBy: 'release_date',
        movieToEdit: {
            title: '',
            tagline: 'New movie',
            vote_average: 0,
            vote_count: 0,
            release_date: '',
            poster_path: '',
            overview: '',
            budget: 1000,
            revenue: 2000,
            genres: [
            ],
            runtime: ''
        }
    }
};

const rootReducer = combineReducers({
    viewReducer, 
    movieReducer
});

export const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(thunk));