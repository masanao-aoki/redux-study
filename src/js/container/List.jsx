'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { ajaxRequest,chengePageNum } from '../action/action'
import moment from 'moment'
import classNames from 'classnames'
import {Link} from 'react-router'

export class List extends React.Component {

    componentWillReceiveProps(nextProps) {
        if(nextProps.searchValue != this.props.searchValue || nextProps.selectSearchTypeValue != this.props.selectSearchTypeValue){
            this.props.ajaxRequest(nextProps.searchValue,nextProps.selectSearchTypeValue);
            this.props.handlePageNum(1);
        }
    }


    componentDidMount(){
        if(this.props.searchValue && this.props.selectSearchTypeValue) {
            this.props.ajaxRequest(this.props.searchValue, this.props.selectSearchTypeValue);
        } else {
            this.props.ajaxRequest();
        }
    }

    render() {
        return (
            <div className="article">
                {this.props.content.map(({title,tags,id,created_at,user})=> {
                        const articleUrl = '/detail/'+id;
                        const createdDate = moment(created_at).format("YYYY/MM/DD");
                        const userData = user.name ? user.name : user.id;
                        return <article className="article-item" key={id}>
                        <Link to={`/article/${id}`}>
                        <div className='arictle-item-head'>
                            <h2 className="article-item-title">
                                {title}
                            </h2>
                            <ul className="article-item-tag-group">
                                {tags.map(({name})=>{
                                    return <li key={name}>{name}</li>
                                })}
                            </ul>
                        </div>
                        <time className="article-item-time" dateTime={created_at}>{createdDate}</time>
                        <p className="article-item-user">{userData}</p>
                        </Link>
                        </article>
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        content: state.home.content,

    }
}

function mapDispatchToProps(dispatch) {
    return {
        ajaxRequest: (searchVlue, selectType) => { dispatch(ajaxRequest(searchVlue, selectType)) },
        handlePageNum: (pageNum) => { dispatch(chengePageNum(pageNum)) },
        init: () => { dispatch(ajaxRequest()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
