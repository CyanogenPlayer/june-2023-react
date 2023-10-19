import React from 'react';

import css from './Post.module.css';

const PostComponent = ({post: {id, title}, detailsButtonClickEvent}) => {
    return (
        <div className={css.Post}>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={() => detailsButtonClickEvent(id)}>Details</button>
        </div>
    );
};

export default PostComponent;