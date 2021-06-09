import { combineReducers } from "redux";
import {firebaseReducer} from 'react-redux-firebase';
import alertReducer from './alertReducer';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
import modalReducer from './modalReducer';
export default combineReducers({
    firebaseReducer,
    alertReducer,
    categoryReducer,
    productReducer,
    modalReducer,
})