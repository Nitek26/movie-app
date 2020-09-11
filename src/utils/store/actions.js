import ACTIONS from './actionTypes'

const loadMovies = () => ({
    type: ACTIONS.LOAD_MOVIES
});

const setAddModalVisbility = (visible) => ({
    type: ACTIONS.SET_ADD_MODAL_VISIBILITY,
    payload:{
        visible: visible
    }
});

export { loadMovies, setAddModalVisbility };