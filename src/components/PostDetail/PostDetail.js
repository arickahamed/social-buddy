import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {id} = useParams();
    const [postDetail, setPostDetail] = useState({});
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPostDetail(data))
    });
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    })
    const divStyle = {
        width: "500px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid orange",
        borderRadius: "10px",
        backgroundColor: "lightgray"
    };
    return (
        <div style={divStyle}>
            <h3><u>The detail showing below for the id is - {id}</u></h3>
            <h1>{postDetail.title}</h1>
            <h2>{comments.name}</h2>
            <h3>{comments.email}</h3>
            <p>{postDetail.body}</p>
        </div>
    );
};

export default PostDetail;