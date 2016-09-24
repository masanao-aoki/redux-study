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
                .end((err, res) => {
                    if( res ) {
                        resolve(res.body);
                    } else {
                        reject(err);
                    }
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

export function cgangeSelectValue(type) {
    return {
        type: 'SELECT',
        mode: type
    }
}

export function returnRequest(data) {
    return {
        type: 'AJAX',
        text: data
    }
}

export function changeSearchValue(value) {
    return {
        type: 'CHANGEVALUE',
        text: value
    }
}
