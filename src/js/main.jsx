'use strict';

import React from 'react'
import { render } from 'react-dom'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './component/app'
import reducer from './reducer'

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
