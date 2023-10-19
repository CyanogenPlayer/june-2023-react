import React from 'react';

import css from './User.module.css';

const UserComponent = ({user: {id, name}, click}) => {
    return (
        <div className={css.User}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={() => click(id)}>Details</button>
        </div>
    );
};

export default UserComponent;