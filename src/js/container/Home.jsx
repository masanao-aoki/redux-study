'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { ajaxRequest, valueChange, typeChange, pageNumChange } from '../action/action'
import moment from 'moment'
import classNames from 'classnames'
import {Link} from 'react-router'
import List from './List'
import Pager from './Pager'


export class Home extends React.Component {


    componentDidMount(){
        const {
            searchType,
            searchValue,
            currentPageNum,
            queryChange,
            params,
            location: {query}
        } = this.props

        console.log(query.page || currentPageNum);

        queryChange({
            searchType: params.type || searchType,
            searchValue: query.value || searchValue,
            currentPageNum: query.page || currentPageNum
        })

    }

    render() {
        const {
            searchType,
            searchValue,
            currentPageNum,
            valueChange,
            typeChange,
            pageNumCange,
            queryChange
        } = this.props

        return (
            <div>
                <div className="searchform">
                    <ul className="searchform-radio-group">
                        {this.props.selectSearchType.map(({type,label}) => {
                            const radioGroupItemClass = classNames(
                                'searchform-radio-group-item',
                                { 'searchform-radio-group-item-active': searchType === type }
                            );
                            return (
                                <li className={radioGroupItemClass} key={type}>
                                    <input type="radio"
                                        id={type}
                                        name="type"
                                        value={type}
                                        onChange={(e)=> typeChange(e.target.value)}
                                        checked={searchType === type}
                                    />
                                    <label htmlFor={type}>{label}</label>
                                </li>
                            );
                        })}
                    </ul>
                    <input className='searchform-input' type="text" placeholder="記事タイトルから検索" value={searchValue} onChange={(e)=> valueChange(e.target.value)}/>
                    {(() => {
                        if (searchValue)
                            return <Link
                            to={{ pathname: '/search/' + searchType, query: { value: searchValue } }}
                            className='searchform-submit'
                            onClick={()=> queryChange({
                                searchType,
                                searchValue,
                                currentPageNum: 1
                            })}
                            >
                            </Link>;
                        else
                        return <span className='searchform-submit'></span>;
                    })()}
                </div>
                <List
                    content={this.props.content}
                />

                <Pager
                    searchType={searchType}
                    searchValue={searchValue}
                    currentPageNum={currentPageNum}
                    pageNumCange={pageNumCange}
                    queryChange={queryChange}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.home
}

function mapDispatchToProps(dispatch) {
    return {
        valueChange: (searchVlue) => { dispatch(valueChange(searchVlue)) },
        typeChange: (searchType) => { dispatch(typeChange(searchType)) },
        pageNumCange: (pageNum) => { dispatch(pageNumChange(pageNum)) },
        queryChange: (querys) => {
            dispatch(ajaxRequest(querys)),
            dispatch(valueChange(querys.searchValue)),
            dispatch(typeChange(querys.searchType)),
            dispatch(pageNumChange(querys.currentPageNum))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
