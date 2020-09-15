import { 
    loadMoviesInProgress, 
    loadMoviesSuccess, 
    loadMoviesFailure,
    moviesChanged
} from './actions';

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

export const deleteMovie = (id) => async (dispatch) => {
    try {
        let url = `http://localhost:4000/movies/${id}`;
        const response =  await fetch(url, {
            method: 'DELETE'
        });
    
        if(response.status === 204) {
            dispatch(moviesChanged());
            return;
        }

        alert('Error');

        
    } catch (error) {
        alert('Error');
    }
};

export const addMovie = (movie) => async (dispatch) => {
    try {
        let url = `http://localhost:4000/movies/`;
        const response =  await fetch(url, {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'Content-Type': 'application/json'
              }
        });
    
        if(response.status === 201) {
            dispatch(moviesChanged());
            return;
        }

        alert('Error');

        
    } catch (error) {
        alert('Error');
    }
};

