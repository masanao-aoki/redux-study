'use strict';

const initialState = {

}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case 'AJAX': {
            return {
                content: action.text,
            }
        }
        default:
            return state
    }
}
