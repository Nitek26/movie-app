import ACTIONS from './actionTypes'

const viewReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.SET_ADD_MODAL_VISIBILITY: {
            const visible = action.payload.visible;

            return {
                ...state,
                addModalVisible: visible
            };
        }
        case ACTIONS.SET_DELETE_MODAL_VISIBILITY: {
            const id = action.payload.id;

            return {
                ...state,
                deleteConfirmationOpenedFor: id
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
        case ACTIONS.SHOW_OPTIONS: {
            return {
                ...state,
                optionsOpenedFor: action.payload.id
            }
        }
        case ACTIONS.HIDE_OPTIONS: {
            return {
                ...state,
                optionsOpenedFor: 0
            }
        }
        case ACTIONS.SET_EDIT_MODAL_VISIBILITY: {
            const editModalVisible = action.payload.movie ? !!(action.payload.movie.id) : false;
            return {
                ...state,
                editModalVisible
            }
        }
        case ACTIONS.MOVIES_CHANGED: {
            return {
                ...state,
                deleteConfirmationOpenedFor: 0,
                addModalVisible: false,
                editModalVisible: false
            }
        }
        default: {
            return state;
        }
    }
};

const movieReducer = (state = {}, action) => {
    switch (action.type) {
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
            return {
                ...state,
                areMoviesLoading: false
            };
        }
        case ACTIONS.SET_FILTER: {
            return {
                ...state,
                filterBy: action.payload.filterBy
            };
        }
        case ACTIONS.SET_SORT: {
            return {
                ...state,
                sortBy: action.payload.sortBy
            };
        }
        case ACTIONS.MOVIE_VALUE_CHANGED: {
            const { name, value } = action.payload;
            const movieToEdit = {
                ...state.movieToEdit,
                [name]: value
            }

            return {
                ...state,
                movieToEdit: movieToEdit
            }
        }
        case ACTIONS.MOVIES_CHANGED: {
            return {
                ...state,
                operationCounter: state.operationCounter + 1,
                movieToEdit: { ...emptyMovie }
            }
        }
        case ACTIONS.RESET_MOVIE: {
            const movieToEdit = {
                ...state.movieToEdit,
                ...action.payload.movie
            }
            return {
                ...state,
                movieToEdit: movieToEdit
            }
        }
        case ACTIONS.SET_EDIT_MODAL_VISIBILITY: {
            const movie = action.payload.movie ? action.payload.movie : { ...emptyMovie };
            return {
                ...state,
                movieToEdit: movie, 
                initialMovie: { ...movie } 
            }
        }
        default: {
            return state;
        }
    }
};

const emptyMovie = {
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
};

export { viewReducer, movieReducer };