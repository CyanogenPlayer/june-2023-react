import React, {useEffect, useState} from 'react';

import PostComponent from "../post/PostComponent";
import PostDetailsComponent from "../postDetails/PostDetailsComponent";
import {postService} from "../../services/postService";
import css from "./Posts.module.css";

const PostsComponent = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    const detailsButtonClickEvent = async (postId) => {
        const {data} = await postService.getById(postId);
        setPostDetails(data);
    }

    return (
        <div>
            {
                postDetails && <PostDetailsComponent postDetails={postDetails}/>
            }
            <div className={css.Posts}>
                {posts.map(post => <PostComponent key={post.id} post={post}
                                                  detailsButtonClickEvent={detailsButtonClickEvent}/>)}
            </div>
        </div>
    );
};

export default PostsComponent;