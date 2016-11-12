'use strict';

import React from 'react'
import { connect } from 'react-redux'
import { ajaxRequest, changeSearchValue, cgangeSelectValue } from '../action/app'

class App extends React.Component {

    componentDidMount(){
        this.props.init();
    }


    render() {
        return (
            <div>
                <ul className="radio-group">
                    {this.props.selectSearchType.map(function({type,label}) {
                        return <li className="radio-group-item" key={type}><input type="radio" id={type} name="typeRadio" value={type}/><label htmlFor={type} onClick={(e)=> this.props.handleTypeClick(e)}>{label}</label></li>;
                    })}
                </ul>
                <select onChange={(e) => this.props.hundleSelect(e.target.value)}>
                    {this.props.selectArray.map(function({item,type}) {
                        return <option key={type} value={type}>{item}</option>;
                    })}
                </select>
                <input type="text" placeholder="記事タイトルから検索" value={this.props.searchValue} onChange={(e)=> this.props.handleChange(e.target.value)}/>
                <button onClick={() => this.props.handleClick(this.props.searchValue,this.props.selectValue)}>検索</button>
                <ul>
                    {this.props.content.map(function({title,url}) {
                        return <li key={title}><a href={url} target="_blank">{title}</a></li>;
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        hundleSelect: (selectType) => { dispatch(cgangeSelectValue(selectType)); },
        handleClick: (searchVlue, selectType) => { dispatch(ajaxRequest(searchVlue, selectType)) },
        handleChange: (searchVlue) => { dispatch(changeSearchValue(searchVlue)) },
        handleTypeClick: (e) => { console.log(e) },
        init: () => { dispatch(ajaxRequest()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
