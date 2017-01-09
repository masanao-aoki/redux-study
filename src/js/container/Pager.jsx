'use strict';

import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import {Link} from 'react-router'
import { scrollTop } from '../action/action'

export default class Pager extends React.Component {

    render() {
        const {
            searchValue,
            currentPageNum
        } = this.props

        const next = { page: parseInt(currentPageNum)+1 }
        const prev = { page: parseInt(currentPageNum)-1 }

        if(searchValue) {
            next.q = searchValue;
            prev.q = searchValue;
        }

        const pagerComponent = currentPageNum > 1 ? (
            <li>
                <Link
                    to={{
                        pathname: 'search/',
                        query: prev
                    }}
                    onClick={ () => scrollTop() }
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
                            pathname: 'search/',
                            query: next
                        }}
                        onClick={ () => scrollTop() }
                    >
                        NEXT
                    </Link>
                </li>
            </ul>
        )
    }
}
