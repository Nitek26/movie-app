export const getAddModalVisbility = store => store.viewReducer.addModalVisible;

export const getSelectedMovie = store => store.viewReducer.selectedMovie;

export const getAreMoviesLoading = store => store.movieReducer.areMoviesLoading;

export const getMovies = store => store.movieReducer.movies;

export const getTotalMovies = store => store.movieReducer.totalMovies;

export const getFilterBy = store => store.movieReducer.filterBy;