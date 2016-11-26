'use strict';

import React from 'react'
import classNames from 'classnames'
import Header from '../presentational/header'
import Footer from '../presentational/footer'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main className="l-main">
                    {this.props.children}
                </main>
                <Footer />
            </div>
        );
    }
}
