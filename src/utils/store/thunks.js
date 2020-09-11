import { 
    loadMoviesInProgress, 
    loadMoviesSuccess, 
    loadMoviesFailure} from './actions';

export const loadMovies = () => async (dispatch) => {
    try {
        dispatch(loadMoviesInProgress());
        const response =  await fetch('http://localhost:4000/movies?searchBy=title&limit=12');
        const movies =  await response.json();

        dispatch(loadMoviesSuccess(movies));
    } catch (error) {
        dispatch(loadMoviesFailure());
        alert('Error');
    }
};