'use strict';

import request from 'superagent'

export function ajaxRequest() {
    let resBody;
    request
        .get('https://qiita.com/api/v2/items')
        .end(function(err, res){
            resBody = res.body
            return res.body
    });

    return {
        type: 'AJAX',
        cotent: resBody
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
