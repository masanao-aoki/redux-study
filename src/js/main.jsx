'use strict';

import React from 'react'
import { render } from 'react-dom'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, Link, hashHistory } from 'react-router'

import App from './component/app'
import AppReducer from './reducer/app'


import Detail from './component/detail'
import DetailReducer from './reducer/detail'

const rootReducer = combineReducers({ AppReducer, DetailReducer });
console.log(rootReducer);
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)


render(
    <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/detail/:articleId" component={Detail}/>
    </Router>
    </Provider>,
    document.getElementById('root')
)
