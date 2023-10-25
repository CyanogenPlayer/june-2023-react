import React from 'react';

const Post = ({post}) => {
    const {id, userid, title, body} = post;

    return (
        <div>
            <div>id: {id}</div>
            <div>userid: {userid}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default Post;