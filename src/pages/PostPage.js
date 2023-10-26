import React from 'react';
import {useLocation} from "react-router-dom";

import Post from "../components/PostContainer/Post";

const PostPage = () => {
    const {state} = useLocation();

    return (
        <div>
            <Post id={state}/>
        </div>
    );
};

export default PostPage;