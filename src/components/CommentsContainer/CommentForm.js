import React from 'react';
import {useForm} from "react-hook-form";

import {commentsService} from "../../services/commentService";

const CommentForm = ({setComments}) => {
    const {reset, handleSubmit, register} = useForm();

    const save = async (comment) => {
        const {data} = await commentsService.create(comment);
        setComments(prev => [...prev, data]);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="email" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>Save</button>
        </form>
    );
};

export default CommentForm;