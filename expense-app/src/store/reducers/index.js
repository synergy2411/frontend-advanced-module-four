import * as fromAction from '../actions';

const initialState = {
    counter: 0
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case fromAction.INCREMENT:
            return {
                counter: state.counter + 1
            }
        case fromAction.DECREMENT:
            return {
                counter: state.counter - 1
            }
        case fromAction.ADD_COUNTER:
            return {
                counter: state.counter + action.value
            }
        case fromAction.SUBTRACT_COUNTER:
            return {
                counter: state.counter - action.value
            }
        default:
            return state;
    }
}

export default rootReducer;