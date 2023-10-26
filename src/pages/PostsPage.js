import React from 'react';
import {useLocation} from "react-router-dom";

import Posts from "../components/PostsContainer/Posts";

const PostsPage = () => {
    const {state} = useLocation();

    return (
        <div>
            <Posts userId={state}/>
        </div>
    );
};

export default PostsPage;