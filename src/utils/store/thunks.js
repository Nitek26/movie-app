import { 
    loadMoviesInProgress, 
    loadMoviesSuccess, 
    loadMoviesFailure} from './actions';

export const loadMovies = (filter, sort) => async (dispatch) => {
    try {
        dispatch(loadMoviesInProgress());
        let url = `http://localhost:4000/movies?limit=12&sortBy=${sort}&sortOrder=asc`;
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