import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
    const {id, title} = props.post;
    const history = useHistory();
    const showDetails = (id) => {
        const routeUrl = `post/${id}`;
        history.push(routeUrl);
    };
    const divStyle = {
        width: "500px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid cyan",
        borderRadius: "10px"
    };
    return (
        <div style={divStyle}>
            <h4><u><i>The ID of the post is : {id}</i></u></h4>
            <h2>{title}</h2>
            <button onClick={()=>showDetails(id)}>Show Details</button>
        </div>
    );
};

export default Post;