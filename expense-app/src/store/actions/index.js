export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const SUBTRACT_COUNTER = "SUBTRACT_COUNTER";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

// Action Creators
export const onSubtract = (value) => {
    // Enable to modify the existing action and/or payload
    return {
        type: SUBTRACT_COUNTER,
        value
    }
}

export const onStoreResult = (counterValue) => {
    return {
        type: STORE_RESULT,
        value: counterValue
    }
}

export const onDeleteResult = (idx) => {
    return {
        type: DELETE_RESULT,
        value: idx
    }
}