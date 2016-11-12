'use strict';

const initialState = {
    content: [],
    searchValue: '',
    selectSearchType: [
        {
            type: 'tag',
            label: 'タグで探す'
        },
        {
            type: 'title',
            label: 'タイトルで探す'
        }
    ],
    selectArray: [
        {
            type: '',
            item: '-'
        },
        {
            type: 'tag',
            item: 'タグで探す'
        },
        {
            type: 'title',
            item: 'タイトルで探す'
        }
    ]
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'SELECT': {
            return Object.assign({}, state, {
                selectValue: action.mode
                })
            }
        case 'CHANGEVALUE': {
            return Object.assign({}, state, {
                searchValue: action.text,
                })
            }
        case 'AJAX': {
            return Object.assign({}, state, {
                content: action.text,
                })
            }
        default:
            return state
    }
}
