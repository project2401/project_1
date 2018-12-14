import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Rout from './Router';
// import App from './components/Button'
// import{ createStore } from 'redux'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers/index'
// import createBrowserHistory from 'history/createBrowserHistory'
// import { Router} from 'react-router';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware()));

ReactDOM.render(
    <Provider store ={store}>
        
            <Rout />
        
    </Provider>
, document.getElementById('root'));
