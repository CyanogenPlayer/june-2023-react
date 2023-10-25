import React from 'react';
import {useForm} from "react-hook-form";

import {postService} from "../../services/postService";

const PostForm = ({setPosts}) => {
    const {reset, handleSubmit, register} = useForm();

    const save = async (post) => {
        const {data} = await postService.create(post);
        setPosts(prev => [...prev, data]);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'title'} {...register('title')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <input type="text" placeholder={'house'} {...register('address.house')}/>
            <input type="text" placeholder={'street'} {...register('address.street')}/>
            <button>Save</button>
        </form>
    );
};

export default PostForm;