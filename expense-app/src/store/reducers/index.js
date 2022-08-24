import * as fromAction from '../actions';

const initialState = {
    counter: 0,
    result: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case fromAction.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case fromAction.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case fromAction.ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case fromAction.SUBTRACT_COUNTER:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case fromAction.STORE_RESULT:
            return {
                ...state,
                result: [action.value, ...state.result]
            }
        default:
            return state;
    }
}

export default rootReducer;