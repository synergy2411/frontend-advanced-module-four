import React, { useReducer } from 'react';

function reducer(state, action) {
    if (action.type === "INCREMENT") {
        // state.counter++              // NEVER EVER MUTATE THE STATE
        return {
            counter: state.counter + 1
        }
    }
    return state;
}

const UseReducerDemo = () => {

    const [stateVar, dispatch] = useReducer(reducer, { counter: 0 })

    return (
        <div>
            <h2>Counter : {stateVar.counter}</h2>
            <button className='btn btn-primary'
                onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>
        </div>
    );
}

export default UseReducerDemo;
