import { 
    loadMoviesInProgress, 
    loadMoviesSuccess, 
    loadMoviesFailure} from './actions';

export const loadMovies = (filter) => async (dispatch) => {
    try {
        dispatch(loadMoviesInProgress());
        let url = 'http://localhost:4000/movies?searchBy=title&limit=12';
        if(filter !== 'all'){
            url = url + `&filter=${filter}`;
        }
        const response =  await fetch(url);
        const movies =  await response.json();

        dispatch(loadMoviesSuccess(movies));
    } catch (error) {
        dispatch(loadMoviesFailure());
        alert('Error');
    }
};