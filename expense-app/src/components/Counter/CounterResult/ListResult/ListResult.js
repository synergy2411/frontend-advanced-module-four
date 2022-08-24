import React from 'react';
import { useSelector } from 'react-redux';

const ListResult = () => {
    const result = useSelector((store) => store.result);

    return (
        <div className='row'>
            <div className='col-6 offset-3'>
                <ul className='list-group'>
                    {result.map((r) => <li className='list-group-item' key={r}>{r}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default ListResult;
