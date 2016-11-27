'use strict';

import React from 'react'
import moment from 'moment'
import classNames from 'classnames'
import {Link} from 'react-router'

export default class List extends React.Component {

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
