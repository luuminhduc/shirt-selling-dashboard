import { combineReducers } from "redux";
import {firebaseReducer} from 'react-redux-firebase';
import alertReducer from './alertReducer';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
export default combineReducers({
    firebaseReducer,
    alertReducer,
    categoryReducer,
    productReducer,
})