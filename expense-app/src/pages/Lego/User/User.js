import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

import classes from "./User.module.css";

const User = () => {

    const params = useParams()
    const navigate = useNavigate()

    const { userId } = params;

    const [posts, setPosts] = useState([])
    const [user, setUser] = useState();
    const [isItemDeleted, setIsItemDeleted] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            axios.get("http://localhost:3030/users?id=" + userId)
                .then(response => {
                    setUser(response.data[0])
                }).catch(console.error)
        }, 3000)
    }, [userId])

    useEffect(() => {
        axios.get(`http://localhost:3030/posts?author=${userId}`)
            .then(response => {
                setPosts(response.data)
            }).catch(console.error)
    }, [userId, isItemDeleted])

    const onAddPost = () => navigate(`/user/${userId}/posts/add-new`)

    const onDeletePost = (postId) => {
        axios.delete(`http://localhost:3030/posts/${postId}`)
            .then(response => {
                setIsItemDeleted(!isItemDeleted)
            }).catch(console.error)
    }

    if (user) {
        return (
            <>
                <div className='row'>
                    <div className='col-6'>
                        <div className='card'>
                            <div className='card-img-top'>
                                <img src={user.avatar} alt={user.name} className="img-fluid rounded-circle" />
                            </div>
                            <div className='card-body'>
                                <h2 className={`text-center ${classes['my-border']}`}>
                                    {user.name.toUpperCase()}</h2>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4 className='text-center'>My Post(s) -</h4>
                            </div>
                            <div className='card-body text-center'>
                                <button className='btn btn-dark btn-block btn-sm' onClick={onAddPost}>
                                    Create New Post</button>
                                <br />
                                <br />
                                {posts.length > 0 ?
                                    <ul className='list-group'> {
                                        posts.map(p => <li
                                            onDoubleClick={() => onDeletePost(p.id)}
                                            className={`list-group-item ${classes['clickable']}`}
                                            key={p.id}>{p.title}</li>)
                                    }</ul> :
                                    <p>No Post Found.</p>}
                                <br />
                                <p className='alert alert-danger'>*Double click to delete the post</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </>
        );
    } else {
        return <BounceLoader />
    }
}

export default User;
