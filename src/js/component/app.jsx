'use strict';

import React from 'react'

export default class App extends React.Component {
    render() {
        return <div>
            <span>{this.props.fuga}</span>
            <br />
            <input type="text" value={this.props.fuga} onChange={this.props.handleChange} />
            <br />
            <br />
            <br />
            <span>{this.props.nega}</span>
            <button onClick={ () => this.props.handleClick() }>増加</button>
        </div>
    }
}
