import React from 'react';
import { useDispatch } from 'react-redux';

import * as fromAction from '../../../store/actions';

const CounterButton = () => {

    const dispatch = useDispatch()

    const increaseHandler = () => {
        dispatch({ type: fromAction.INCREMENT })
    }
    return (
        <div className='text-center'>
            <div className='btn-group'>
                <button className='btn btn-primary' onClick={increaseHandler}>Increase</button>
                <button className='btn btn-dark'
                    onClick={() => dispatch({ type: fromAction.DECREMENT })}>Decrease</button>
                <button className='btn btn-success'
                    onClick={() => dispatch({ type: fromAction.ADD_COUNTER, value: 10 })}>Add (10)</button>
                <button className='btn btn-warning'
                    onClick={() => dispatch(fromAction.onSubtract(5))}>Subtract (5)</button>
            </div>
        </div>
    );
}

export default CounterButton;
