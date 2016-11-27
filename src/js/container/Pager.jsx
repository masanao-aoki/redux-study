'use strict';

import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import {Link} from 'react-router'

export default class Pager extends React.Component {

    render() {
        const {
            searchType,
            searchValue,
            currentPageNum,
            queryChange,
            pathname
        } = this.props

        console.log(pathname);



        const next = { page: currentPageNum+1 }
        const prev = { page: currentPageNum-1 }

        if(searchValue) {
            next.value = searchValue;
            prev.value = searchValue;
        }

        const pagerComponent = currentPageNum > 1 ? (
            <li>
                <Link
                    to={{
                        pathname: pathname,
                        query: prev
                    }}
                    onClick={()=> queryChange({
                            searchType,
                            searchValue,
                            currentPageNum: prev.page
                        })
                    }
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
                            pathname: pathname,
                            query: next
                        }}
                        onClick={
                            ()=> queryChange({
                                searchType,
                                searchValue,
                                currentPageNum: next.page
                            })
                        }
                    >
                        NEXT
                    </Link>
                </li>
            </ul>
        )
    }
}
