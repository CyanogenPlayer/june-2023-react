import React, {useEffect, useState} from 'react';
import PostForm from "./PostForm";
import Posts from "./Posts";
import {postService} from "../../services/postService";

const PostsContainer = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    return (
        <div>
            <PostForm setPosts={setPosts}/>
            <hr/>
            <Posts posts={posts}/>
        </div>
    );
};

export default PostsContainer;