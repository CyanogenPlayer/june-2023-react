import React from 'react';
import {useLoaderData} from "react-router-dom";

import PostDetails from "../components/PostsContainer/PostDetails";

const PostDetailsPage = () => {
    const {data} = useLoaderData();

    return (
        <div>
            {data && <PostDetails post={data}/>}
        </div>
    );
};

export default PostDetailsPage;