import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { isLoaded, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import store from './redux/store';
import firebase from 'firebase';
import config from './firebase/config';
import {Route,BrowserRouter,Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home';

import AlertList from './components/AlertList';
import Container from './components/Container';
import Products from './pages/Products';
import EditProduct from './pages/EditProduct';
import Category from './pages/Category';


const rrfProps = {
  firebase,
  config,
  dispatch:store.dispatch
}

const AuthIsLoaded = ({children}) => {
  const auth = useSelector(state=>state.firebaseReducer.auth);
  if(!isLoaded(auth)) return "";
  return children;
}

const App = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
       <AuthIsLoaded>
         <AlertList/>
       <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Dashboard"/>
          </Route>
          <Route path="/Dashboard" exact>
                <Container>
                <Home/>
                </Container>
          </Route>
          <Route path="/Products" exact>
                <Container>
                <Products/>
                </Container>
          </Route>
          <Route path="/Edit-product" exact>
                <Container>
                <EditProduct/>
                </Container>
          </Route>
          <Route path="/Category" exact>
                <Container>
                <Category/>
                </Container>
          </Route>
        </Switch>
        </BrowserRouter>
       </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}
 
export default App;