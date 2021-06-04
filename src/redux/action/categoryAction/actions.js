import { handleAlert } from '../alertAction/actions';
import * as actions from './actionTypes';

export const fetchCategoryList = ()=> (dispatch,getState,{getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('category').onSnapshot(snap => {
        const docs = [];
        snap.forEach(item => docs.push({...item.data(), id:item.id}));
        dispatch({
            type: actions.FETCH_CATEGORY_LIST,
            payload:docs,
        })
    })
}

export const addCategory = (category) => (dispatch,getState,{getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('category').add(category)
    .then(() => {
        dispatch(handleAlert({text:"New category is added",status:"success"}))
    })
    .catch(err=>{
        dispatch(handleAlert({text:err.message,status:"error"}))
    })
}

export const deleteCategory = (id) => (dispatch,getState,{getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection("category").doc(id).delete()
    .then(() => {
        dispatch(handleAlert({text:"A category is deleted",status:"success"}))
    })
    .catch(err=>{
        dispatch(handleAlert({text:err.message,status:"error"}))
    })
}
