'use strict';

import request from 'superagent'

export function ajaxArticleRequest(articleId) {
        return dispatch => {
            const aricleDetail = () => {
            return new Promise((resolve, reject) => {

                // console.log(articleId)
                let url = 'http://qiita.com/api/v2/items/'+ articleId
                // console.log(url)
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

        const aricleDetails = aricleDetail();
        aricleDetails.then((result) => {
            dispatch(returnArticleRequest(result));
        }).catch(function(reason) {
            // console.log('ok');
        });

    };
}

export function ajaxRequest(searchValue,searchType) {
        return dispatch => {
            const aricleList = () => {
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

        const aricleLists = aricleList();
        aricleLists.then((result) => {
            dispatch(returnRequest(result));
        }).catch(function(reason) {
            // console.log('ok');
        });

    };
}

export function returnArticleRequest(data) {
    // console.log(data)
    return {
        type: 'DETAIL',
        text: data
    }
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