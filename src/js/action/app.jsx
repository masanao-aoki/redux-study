'use strict';

import request from 'superagent'

export function ajaxRequest(searchValue,searchType) {
        return dispatch => {
            const test = () => {
            return new Promise((resolve, reject) => {

                let query = ''
                if( searchValue && searchType ) {
                    query = '?query=qiita+'+ searchType + '%3A' + searchValue;
                }

                let url = 'https://qiita.com/api/v2/items'+ query
                request
                .get(url)
                .withCredentials()
                .end((err, res) => {
                    if( res.body.length ) {
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
    return {
        type: 'AJAX',
        text: data
    }
}

export function chengeSearchType(type) {
    return {
        type: 'RADIO',
        mode: type
    }
}

export function changeSearchValue(value) {
    return {
        type: 'CHANGEVALUE',
        text: value
    }
}
