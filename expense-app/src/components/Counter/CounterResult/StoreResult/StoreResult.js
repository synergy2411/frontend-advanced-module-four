import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as fromActions from '../../../../store/actions';

const StoreResult = () => {
    const dispatch = useDispatch();
    const counter = useSelector(store => store.counter)
    return (
        <div className='text-center'>
            <button className='btn btn-lg btn-danger'
                onClick={() => dispatch(fromActions.onStoreResult(counter))}>Store Result</button>
        </div>
    );
}

export default StoreResult;
