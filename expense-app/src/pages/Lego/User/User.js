import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {

    const params = useParams()
    const { userId } = params;
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState();

    useEffect(() => {
        axios.get("http://localhost:3030/users?id=" + userId)
            .then(response => {
                setUser(response.data[0])
            }).catch(console.error)
    }, [userId])

    useEffect(() => {
        axios.get(`http://localhost:3030/posts?author=${userId}`)
            .then(response => {
                setPosts(response.data)
            }).catch(console.error)
    }, [userId])

    if (user) {
        return (
            <div className='row'>
                <div className='col-6 offset-3'>
                    <div className='card'>
                        <div className='card-img-top'>
                            <img src={user.avatar} alt={user.name} className="img-fluid rounded-circle" />
                        </div>
                        <div className='card-body'>
                            <h2 className='text-center'>{user.name}</h2>
                            {posts.length > 0 ? <ul> {posts.map(p => <li key={p.id}>{p.title}</li>)}</ul> : <p>No Post Found.</p>}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <p>No User found</p>
    }
}

export default User;
