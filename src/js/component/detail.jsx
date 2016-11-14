'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { ajaxRequest } from '../action/detail'


export class Detail extends React.Component {

    componentDidMount(){
        this.props.init(this.props.params.articleId);
    }


    render() {
        console.log(this.props.detailContent.title);
        return (
            <div>
            <h2 className="article-item-title">
                {this.props.detailContent.title}
            </h2>
            <div className="aaa" dangerouslySetInnerHTML={{__html: this.props.detailContent.rendered_body}}>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.detail
}

function mapDispatchToProps(dispatch) {
    return {
        init: (articleId) => { dispatch(ajaxRequest(articleId)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
