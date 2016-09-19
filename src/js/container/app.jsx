'use strict';

import React from 'react'
import { connect } from 'react-redux'

import App from '../component/app'
import { increment } from '../action/app'
import { textChange } from '../action/app'


function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        handleChange: (e) => {
            dispatch(textChange(e.target.value)) },
        handleClick: () => { dispatch(increment()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
