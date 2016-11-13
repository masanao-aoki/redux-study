'use strict';

const initialState = {
    detailContent: []
}

export default function reducers(state = initialState, action) {
    switch(action.type) {
        case 'AJAX': {
            console.log(action.text)
            return Object.assign({}, state, {
                detailContent: action.text,
                })
            }
        default:
            return state
    }
}
