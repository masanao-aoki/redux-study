'use strict';

import request from 'superagent'

export function ajaxRequest(articleId) {
        return dispatch => {
            const test = () => {
            return new Promise((resolve, reject) => {


                let url = 'http://qiita.com/api/v2/items/'+ articleId
                console.log(url)
                request
                .get(url)
                .withCredentials()
                .end((err, res) => {
                    if( res.body ) {
                        resolve(res.body);
                    } else {
                        reject('nnnn');
                    }
                });

            });
        };

        const tests = test();
        tests.then((result) => {
            dispatch(returnRequest(result));
        }).catch(function(reason) {
            console.log('ok');
        });

        // request
        // .get('https://qiita.com/api/v2/items')
        // .end(function(err, res){
        //     console.log();
        // });
    };
}

export function returnRequest(data) {
    console.log(data)
    return {
        type: 'AJAX',
        text: data
    }
}
