import React, {useEffect, useState} from 'react';

import {postService} from "../../services/postService";

const Post = ({id}) => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        postService.getById(id).then(({data}) => setPost(data))
    }, [id]);

    return (
        <div>
            <div>id: {post.id}</div>
            <div>userId: {post.userId}</div>
            <div>title: {post.title}</div>
            <div>body: {post.body}</div>
            <hr/>
        </div>
    );
};

export default Post;
