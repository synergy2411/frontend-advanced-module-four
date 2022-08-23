import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

import "./AddPost.css";

const AddPost = () => {
    const navigate = useNavigate()
    const inputPostRef = useRef()
    const { userId } = useParams()
    const onAddPost = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3030/posts", {
            title: inputPostRef.current.value,
            author: userId
        }).then(response => {
            console.log(response.data)
            navigate("/user/" + userId, { replace: true })
        }).catch(console.error)
    }
    return (
        <div className='backdrop'>
            <div className='post-form text-center'>
                <h5 className='text-center'>Add New Post</h5>
                <br /><br />
                <form>
                    <input type="text" ref={inputPostRef} className="form-control form-control-lg" />
                    <br />
                    <button onClick={onAddPost} className='btn btn-dark'>Add Post</button>
                </form>
            </div>
        </div>
    );
}

export default AddPost;
