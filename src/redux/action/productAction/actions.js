import * as actions from './actionTypes';
import {storage,timeStamp} from '../../../firebase/config';
import { handleAlert } from '../alertAction/actions';


const addProduct = (product,resetForm) => async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('products').add(product)
    .then(() => {
        dispatch(handleAlert({text:`New product is added`,status:"success"}));
        resetForm();
    })
    .catch(err => {
        dispatch(handleAlert({text:`Add product error: ${err.message}`}));
    })
}


export const addProductRequest = (product,resetForm) => async dispatch => {

    const addImageToFirestorage = (img,isFromAddtional) => {
        const storageRef = storage.ref(img.name);
         storageRef.put(img).on('state_changed',() => {
        }, err =>{
            dispatch(handleAlert({text:err.message,status:"error"}))
        },  async () =>  {
            const src = await storageRef.getDownloadURL();
            if(isFromAddtional) {
                imageslist.push(src);
            }else{
                mainImageAfter =src;
            }

            // WAIT FOR MAIN IMAGE AND ADDTIONAL IMAGE ADDING
            if(imageslist.length === additionalImages.length && mainImageAfter) {
                const product = {mainImage:mainImageAfter,additionalImages:imageslist,name,price,stock,category,description,review:[],time:timeStamp()};
                dispatch(addProduct(product,resetForm));
            }
        }) 
    }

    const {mainImage,additionalImages,name,price,stock,category,description} = product;
    const imageslist = [];
    let mainImageAfter;

    // ADD ADDTIONAL IMAGES TO FIRE STORE
    if(additionalImages.length > 0){
        for(let i = 0; i < additionalImages.length;i++) {
            (addImageToFirestorage(additionalImages[i],true));
        }
    }
    // ADD MAIN IMAGE TO FIRE STORE
    addImageToFirestorage(mainImage[0],false);
}

export const fetchProductList = () => async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('products').orderBy('time','desc')
    .onSnapshot(snap => {
        const docs = [];
        snap.forEach(item => {
            docs.push({...item.data(),id:item.id})
        })
        dispatch({
            type: actions.FETCH_PRODUCT_LIST,
            payload:docs,
        })
    })
   
}

export const searchProduct = (term) => {
    return{
        type: actions.SEARCH_PRODUCT,
        payload:term,
    }
}


export const sortProductByPrice = (term )=> {
    return{
        type: actions.SORT_PRODUCT_BY_PRICE,
        payload:term,
    }
}

export const sortProductByName = (term )=> {
    return{
        type: actions.SORT_PRODUCT_BY_NAME,
        payload:term,
    }
}