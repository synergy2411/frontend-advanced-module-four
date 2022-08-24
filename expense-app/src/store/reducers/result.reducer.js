import * as fromAction from '../actions';

const initialState = {
    result: []
}

function resultReducer(state = initialState, action) {
    switch (action.type) {
        case fromAction.STORE_RESULT:
            return {
                ...state,
                result: [action.value, ...state.result]
            }
        case fromAction.DELETE_RESULT:
            return {
                ...state,
                result: state.result.filter((r, i) => i !== action.value)
            }
        default:
            return state;
    }
}

export default resultReducer;