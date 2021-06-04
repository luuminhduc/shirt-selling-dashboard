import * as actions from '../action/categoryAction/actionTypes';

const initialState = {
    categoryList:[],
}

export default function categoryReducer(state=initialState,action) {
    const {type, payload} = action;
    switch(type) {
        case actions.FETCH_CATEGORY_LIST: return {...state, categoryList:payload};
        default: return state;
    }
}