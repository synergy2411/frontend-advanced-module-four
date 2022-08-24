import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as fromAction from '../../../../store/actions';

const ListResult = () => {
    const result = useSelector((store) => store.res.result);
    const dispatch = useDispatch()
    const deleteHandler = (i) => {
        dispatch(fromAction.onDeleteResult(i))
    }
    return (
        <div className='row'>
            <div className='col-6 offset-3'>
                <ul className='list-group'>
                    {result.map((r, i) => <li onClick={() => deleteHandler(i)} className='list-group-item' key={r}>{r}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default ListResult;
