import React from 'react';

const PostDetailsComponent = ({postDetails: {userId, id, title, body}}) => {
    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default PostDetailsComponent;