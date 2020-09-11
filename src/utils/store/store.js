import { createStore, combineReducers } from 'redux'

import modalReducer from './reducers'

const initialState = {
    modalReducer:{
        addModalVisible: false
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
    modalReducer
});

export const configureStore = () => createStore(rootReducer, initialState);