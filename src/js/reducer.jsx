'use strict';

const initialState = {
    fuga: 'aaaaa',
    nega: 1
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT': {
            return {
                nega: state.nega + 1,
                fuga: state.fuga
            }
        }
        case 'TEXT': {
            return {
                fuga: action.text,
                nega: state.nega
            }
        }
        default:
            return state
    }
}
