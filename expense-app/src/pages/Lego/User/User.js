import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {

    const params = useParams()
    const { userId } = params;

    useEffect(() => {
        axios.get(`http://localhost:3030/posts?author=${userId}`)
            .then(response => {
                console.log(response)
            }).catch(console.error)
    }, [])

    return (
        <div>
            User component loaded...
        </div>
    );
}

export default User;
