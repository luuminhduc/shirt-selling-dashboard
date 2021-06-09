import  * as actions from '../action/modalAction/actionTypes';

const initialState = {
    modal:false,
    title:'',
    text:'',
    callback:null
}

export default function modalReducer(state=initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case actions.HIDE_MODAL: return initialState;
        case actions.SHOW_MODAL:{
            const {title,text,callback} = payload;
            return {modal:true,title,text,callback}
        }
        default: return state;
    }
}