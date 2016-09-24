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
            <ul>
                {this.props.content.map(function({title}) {
                    return <li key={title}>{title}</li>;
                })}
            </ul>
        </div>
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        init: () => { dispatch(ajaxRequest()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
