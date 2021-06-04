import { combineReducers } from "redux";
import {firebaseReducer} from 'react-redux-firebase';
import alertReducer from './alertReducer';
import categoryReducer from './categoryReducer';
export default combineReducers({
    firebaseReducer,
    alertReducer,
    categoryReducer,
})