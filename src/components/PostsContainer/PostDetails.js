import React from 'react';

import Comments from "../CommentsContainer/Comments";

const PostDetails = ({post}) => {
    const {id, userId, title, body} = post;

    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <hr/>
            <Comments postId={id}/>
        </div>
    );
};

export default PostDetails;