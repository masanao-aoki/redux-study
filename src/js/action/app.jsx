'use strict';

import request from 'superagent'

export function ajaxRequest() {
    request
        .get('https://qiita.com/api/v2/items')
        .end(function(err, res){
            let resBody = res.body
            console.log();//ここにparse済みのオブジェクトが入る
    });

    console.log(resBody);

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
