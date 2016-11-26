'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { chengePageNum } from '../action/action'
import classNames from 'classnames'
import {Link} from 'react-router'

export class Pager extends React.Component {

    render() {
        const nextPageNum = this.props.pageNum+1;
        const prevPageNum = this.props.pageNum-1;
        const pagerPrevQuery = this.props.searchValue === undefined ? { page:prevPageNum } : { value: this.props.searchValue, page:prevPageNum };
        const pagerNextQuery = this.props.searchValue === undefined ? { page:nextPageNum } : { value: this.props.searchValue, page:nextPageNum };
        console.log()
        const pagerComponent = this.props.pageNum > 1 ? (
            <li>
                <Link
                    to={{
                        pathname: window.location.hash.split('?')[0].substr(1),
                        query: pagerPrevQuery
                    }}
                    onClick={()=> this.props.handlePageNum(prevPageNum)}
                >
                    PREV
                </Link>
            </li>
        ) : null;
        return (
            <ul>
                {pagerComponent}
                <li>
                    <Link
                        to={{
                            pathname: window.location.hash.split('?')[0].substr(1),
                            query: pagerNextQuery
                        }}
                        onClick={()=> this.props.handlePageNum(nextPageNum)}
                    >
                        NEXT
                    </Link>
                </li>
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        pageNum: state.home.currentPageNum
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handlePageNum: (pageNum) => { dispatch(chengePageNum(pageNum)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pager)
