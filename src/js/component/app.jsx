'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { ajaxRequest, changeSearchValue, chengeSearchType } from '../action/app'
import moment from 'moment'
import classNames from 'classnames'
import {Link} from 'react-router'


export class App extends React.Component {

    componentDidMount(){
        this.props.init();
        console.log('componentDidMount');
    }

    render() {
        return (
            <div>
                <div className="searchform">
                    <ul className="searchform-radio-group">
                        {this.props.selectSearchType.map(({type,label}) => {
                            const radioGroupItemClass = classNames(
                                'searchform-radio-group-item',
                                { 'searchform-radio-group-item-active': this.props.selectSearchTypeValue === type }
                            );
                            return (
                                <li className={radioGroupItemClass} key={type}>
                                    <input type="radio"
                                        id={type}
                                        name="typeRadio"
                                        value={type}
                                        onChange={(e)=> this.props.handleTypeClick(e.target.value)}
                                        checked={this.props.selectSearchTypeValue === type}
                                    />
                                    <label htmlFor={type}>{label}</label>
                                </li>
                            );
                        })}
                    </ul>
                    <input className='searchform-input' type="text" placeholder="記事タイトルから検索" value={this.props.searchValue} onChange={(e)=> this.props.handleChange(e.target.value)}/>
                    <button className='searchform-submit' onClick={() => this.props.handleClick(this.props.searchValue,this.props.selectSearchTypeValue)}>検索</button>
                </div>
                <div className="article">
                    {this.props.content.map(({title,tags,id,created_at,user})=> {
                            const articleUrl = '/detail/'+id;
                            const createdDate = moment(created_at).format("YYYY/MM/DD");
                            const userData = user.name ? user.name : user.id;
                            return <article className="article-item" key={id}>
                            <Link to={`/detail/${id}`}>
                            <div className='arictle-item-head'>
                                <h2 className="article-item-title">
                                    {title}
                                </h2>
                                <ul className="article-item-tag-group">
                                    {tags.map(({name})=>{
                                        const tagCurrent = classNames(
                                            { 'article-item-tag-group-item-active': this.props.searchValue.toLowerCase() === name.toLowerCase() && this.props.selectSearchTypeValue === 'tag' }
                                        );
                                        return <li className={tagCurrent} key={name}>{name}</li>
                                    })}
                                </ul>
                            </div>
                            <time className="article-item-time" dateTime={created_at}>{createdDate}</time>
                            <p className="article-item-user">{userData}</p>
                            </Link>
                            </article>
                    })}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return state.app
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: (searchVlue, selectType) => { dispatch(ajaxRequest(searchVlue, selectType)) },
        handleChange: (searchVlue) => { dispatch(changeSearchValue(searchVlue)) },
        handleTypeClick: (searchType) => { dispatch(chengeSearchType(searchType)) },
        init: () => { dispatch(ajaxRequest()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
