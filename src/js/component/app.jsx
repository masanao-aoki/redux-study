'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { increment, textChange, ajaxRequest} from '../action/app'

class App extends React.Component {

    componentDidMount(){
        this.props.init();
    }

    render() {
        return <div>
            <span>{this.props.cotent}</span>
        </div>
    }
}

function mapStateToProps(state) {
    console.log(state)
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        handleChange: (e) => { dispatch(textChange(e.target.value)) },
        handleClick: () => { dispatch(increment()) },
        init: () => { dispatch(ajaxRequest()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
