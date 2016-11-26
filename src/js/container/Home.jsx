'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { ajaxRequest, changeSearchValue, chengeSearchType, chengePageNum } from '../action/action'
import moment from 'moment'
import classNames from 'classnames'
import {Link} from 'react-router'
import List from './List'
import Pager from './Pager'


export class Home extends React.Component {


    componentDidMount(){
        if(this.props.params.type && this.props.location.query.value) {
            this.props.handleChange(this.props.location.query.value);
            this.props.handleTypeClick(this.props.params.type);
        }

        if(this.props.location.query.page) {
            this.props.handlePageNum(this.props.location.query.page);
        }
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
                                        name="type"
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
                    {(() => {
                        if (this.props.searchValue)
                            return <Link to={{ pathname: '/search/' + this.props.selectSearchTypeValue, query: { value: this.props.searchValue } }} className='searchform-submit'>
                            </Link>;
                        else
                        return <span className='searchform-submit'></span>;
                    })()}
                </div>
                <List
                    selectSearchTypeValue={this.props.params.type}
                    searchValue={this.props.location.query.value}
                    searchPageNum={this.props.currentPageNum}
                />

                <Pager
                    selectSearchTypeValue={this.props.params.type}
                    searchValue={this.props.location.query.value}
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
        handleChange: (searchVlue) => { dispatch(changeSearchValue(searchVlue)) },
        handleTypeClick: (searchType) => { dispatch(chengeSearchType(searchType)) },
        handlePageNum: (pageNum) => { dispatch(chengePageNum(pageNum)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
