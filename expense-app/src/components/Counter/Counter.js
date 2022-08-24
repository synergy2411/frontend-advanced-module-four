import React from 'react';
import CounterButton from './CounterButton/CounterButton';
import CounterOutput from './CounterOutput/CounterOutput';
import CounterResult from './CounterResult/CounterResult';

const Counter = () => {
    return (
        <div>
            <CounterOutput />
            <CounterButton />
            <hr />
            <CounterResult />
        </div>
    );
}

export default Counter;
