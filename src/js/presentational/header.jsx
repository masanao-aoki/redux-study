'use strict';

import React from 'react'
import classNames from 'classnames'

export default class Header extends React.Component {
    render() {
        return (
            <header className="l-header header">
                <h1 className="header-title"><a className="header-link" href="/"><span className="header-balloon">誰得</span>Qiita記事検索</a></h1>
            </header>
        );
    }
}
