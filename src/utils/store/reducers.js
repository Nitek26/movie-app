import ACTIONS from './actionTypes'

const modalReducer = (state = {}, action) => {
    switch(action.type){
        case ACTIONS.SET_ADD_MODAL_VISIBILITY: {
            const visible = action.payload.visible;

            return {
                ...state,
                addModalVisible: visible
            };
        }
        default: {
            return state;
        }
    }
}

export default modalReducer;