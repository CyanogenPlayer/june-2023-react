import React from 'react';

const UserComponent = ({user: {name}}) => {
    return (
        <div>
            <div>name: {name}</div>
        </div>
    );
};

export default UserComponent;