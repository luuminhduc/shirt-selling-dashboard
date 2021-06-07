import * as actions from '../action/productAction/actionTypes';

const initialState = {
    productList:[]
}

export default function productReducer(state=initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case actions.FETCH_PRODUCT_LIST: return {...state,productList:payload};
        default: return state;
    }
}