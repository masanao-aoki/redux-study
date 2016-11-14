'use strict';

import React from 'react'
import { render } from 'react-dom'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import * as reducers from './reducers'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

import App from './component/app'
import Detail from './component/detail'

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

const history = syncHistoryWithStore(hashHistory, store)

render(
    <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App}>
        </Route>
        <Route path="/detail/:articleId" component={Detail}/>
    </Router>
    </Provider>,
    document.getElementById('root')
)
