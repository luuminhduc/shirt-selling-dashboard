import * as actions from '../action/productAction/actionTypes';

const initialState = {
    productList:[],
    searchTerm:'',
    sortTerm:'',
    sortTermName:"",
}

export default function productReducer(state=initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case actions.FETCH_PRODUCT_LIST: return {...state,productList:payload};
        case actions.SEARCH_PRODUCT:return{...state,searchTerm:payload};
        case actions.SORT_PRODUCT_BY_PRICE:return{...state,sortTerm:payload};
        case actions.SORT_PRODUCT_BY_NAME:return{...state,sortTermName:payload}
        default: return state;
    }
}