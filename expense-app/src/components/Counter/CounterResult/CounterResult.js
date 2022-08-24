import React from 'react';
import ListResult from './ListResult/ListResult';
import StoreResult from './StoreResult/StoreResult';

const CounterResult = () => {
    return (
        <>
            <StoreResult />
            <br />
            <ListResult />
        </>
    );
}

export default CounterResult;
