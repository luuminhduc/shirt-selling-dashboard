import * as actions from './actionTypes';

export const hideModal = () => {
    return{
        type: actions.HIDE_MODAL,
    }
}

export const showModal = (object) => {
    return{
        type: actions.SHOW_MODAL,
        payload:object,
    }
}