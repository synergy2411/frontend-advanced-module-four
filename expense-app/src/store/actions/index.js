export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const SUBTRACT_COUNTER = "SUBTRACT_COUNTER";

// Action Creators
export const onSubtract = (value) => {
    // Enable to modify the existing action and/or payload
    return {
        type: SUBTRACT_COUNTER,
        value
    }
}