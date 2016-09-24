'use strict';

import request from 'superagent'

export function ajaxRequest() {
        return dispatch => {
            const test = () => {
            return new Promise((resolve, reject) => {
                request
                .get('https://qiita.com/api/v2/items')
                .end((err, res) => {
                    resolve(res.body);
                });

            });
        };

        const tests = test();
        tests.then((result) => {
            dispatch(returnRequest(result));
        });

        // request
        // .get('https://qiita.com/api/v2/items')
        // .end(function(err, res){
        //     console.log();
        // });
    };
}


export function returnRequest(data) {
    return {
            type: 'AJAX',
            text: data
        }
    }
