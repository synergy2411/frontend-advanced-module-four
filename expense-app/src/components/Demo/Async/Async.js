import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Async = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then(response => {
                setComments(response.data)
                // console.log(comments);          // []
            }).catch(console.error)
    }, [])

    return (
        <div>
            <ul>
                {comments.map(comment => <li key={comment.id}>
                    {comment.name}</li>)}
            </ul>
        </div>
    );
}

export default Async;
