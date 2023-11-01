import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services/postService";
import Post from "./Post";

const Posts = () => {
    const {userId} = useParams();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getByUserId(userId).then(({data}) => setPosts(data))
    }, []);

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;