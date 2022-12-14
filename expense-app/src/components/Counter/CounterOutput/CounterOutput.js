import React from 'react';
import { useSelector } from 'react-redux'


const CounterOutput = () => {
    const counter = useSelector((store) => {
        console.log("STATE : ", store);
        return store.ctr.counter
    })

    return (
        <div className='text-center'>
            <p className='display-4'>Counter : {counter} </p>
        </div>
    );
}

export default CounterOutput;


// store -> getState(), dispatch(), subs(), state obj { counter : 0 }