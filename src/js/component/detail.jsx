'use strict';

import React from 'react'
import { connect } from 'react-redux'


export class Detail extends React.Component {

    componentDidMount(){
        this.props.init(this.props.params.articleId);
        console.log('componentDidMount');
    }


    render() {
        console.log(this);
        return (
            <div>
            <p>{}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.DetailReducer
}

function mapDispatchToProps(dispatch) {
    return {
        init: (e) => { console.log(e) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
