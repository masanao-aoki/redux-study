'use strict';

import React from 'react'
import { connect } from 'react-redux'

import { increment } from '../action/app'
import { textChange } from '../action/app'


class App extends React.Component {

    componentDidMount(){
        //なんかの処理
    }

    render() {
        return <div>
            <span>{this.props.fuga}</span>
            <br />
            <input type="text" value={this.props.fuga} onChange={this.props.handleChange} />
            <br />
            <br />
            <br />
            <span>{this.props.nega}</span>
            <button onClick={ () => this.props.handleClick() }>増加</button>
        </div>
    }
}

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
