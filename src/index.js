import Products from './components/products';
import Cart from './components/cart';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {HashRouter, Route} from 'react-router-dom';
import getProducts from './actions';
import Header from './components/header';

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {};
const store = configureStore(persistedState);
store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
store.dispatch(getProducts());

ReactDOM.render(
    <Provider store={store}>
    <HashRouter>
        <div>
            <Route exact path='/' component={Products}/>
            <Route exact path='/cart' component={Cart}/>
            <Route exact path='/hoc' component={Header} />
        </div>
    </HashRouter>
</Provider>, document.getElementById('app'));
