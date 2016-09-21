'use strict';

import request from 'superagent'

export function ajaxRequest() {
    return {
        type: 'AJAX',
        text: 'あああああ'
    }
}

export function increment() {
    return {
        type: 'INCREMENT'
    }
}

export function textChange(setText) {

    return {
        type: 'TEXT',
        text: setText
    }
}
