import * as actions from '../action/alertAction/actionTypes';

const initialState = {
    alertList: [
        // {
        //     id:Math.random(),
        //     text:"Hello dsd  dsdo ok d",
        //     status:"success"
        // },
        // {
        //     id:Math.random(),
        //     text:"Hello dsd  dsdo ok d",
        //     status:"error"
        // },
        // {
        //     id:Math.random(),
        //     text:"Hello dsd  dsdo ok d",
        //     status:"info"
        // },
        // {
        //     id:Math.random(),
        //     text:"Hello dsd  dsdo ok d",
        //     status:"warning"
        // },
    ]
}

export default function alertReducer(state=initialState,action)  {
    const {type,payload} = action;
    switch(type) {
        case actions.ADD_ALERT: return{...state,alertList:[...state.alertList, payload]};
        case actions.REMOVE_ALERT: return{...state,alertList:[...state.alertList].filter(el => el.id !== payload)}
        default: return state;
    }
}