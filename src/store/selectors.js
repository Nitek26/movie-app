export const getAddModalVisbility = store => store.viewReducer.addModalVisible;

export const getSelectedMovie = store => store.viewReducer.selectedMovie;

export const getOptionsOpenedFor = store => store.viewReducer.optionsOpenedFor;

export const getDeleteConfirmationOpenedFor = store => store.viewReducer.deleteConfirmationOpenedFor;

export const getAreMoviesLoading = store => store.movieReducer.areMoviesLoading;

export const getOperationCounter = store => store.movieReducer.operationCounter;

export const getMovies = store => store.movieReducer.movies;

export const getMovieToEdit = store => store.movieReducer.movieToEdit;

export const getEditModalVisible = store => store.viewReducer.editModalVisible;

export const getTotalMovies = store => store.movieReducer.totalMovies;

export const getFilterBy = store => store.movieReducer.filterBy;

export const getSortBy = store => store.movieReducer.sortBy;