import * as actions from './actionTypes';

const addAlert = (alert) => {
    return{
        type: actions.ADD_ALERT,
        payload:alert,
    }
}

export const removeAlert = (id) => {
    return{
        type: actions.REMOVE_ALERT,
        payload:id,
    }
}

export const handleAlert = (alert) => dispatch => {
    const id = Math.random();
    dispatch(addAlert({...alert,id}));
    setTimeout(() => {
        dispatch(removeAlert(id))
    }, [5000])
}