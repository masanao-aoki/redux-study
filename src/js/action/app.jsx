'use strict';

import request from 'superagent'

export function ajaxRequest() {
    let p1 = new Promise((resolve, reject) => {
        //resolve("Success!");
        reject ("Error!");
    });

    p1.then((value) => {
        console.log(value)
    }, (reason) => {
        console.log(reason);
    });
    return {
        type: 'AJAX',
        text: 'あああああ'
    }
}
