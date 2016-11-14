'use strict';

const initialState = {
    content: [],
    searchValue: '',
    selectSearchTypeValue: 'tag',
    selectSearchType: [
        {
            type: 'tag',
            label: 'タグで探す'
        },
        {
            type: 'title',
            label: 'タイトルで探す'
        }
    ]
}

export default function list(state = initialState, action) {
    switch(action.type) {
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
        case 'RADIO': {
            return Object.assign({}, state, {
                selectSearchTypeValue: action.mode,
                })
            }
        default:
            return state
    }
}
