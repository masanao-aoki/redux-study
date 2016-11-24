'use strict';

import React from 'react'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <p>aaaaaaaa</p>
                </header>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
