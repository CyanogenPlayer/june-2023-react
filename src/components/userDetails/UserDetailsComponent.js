import React from 'react';

const UserDetailsComponent = ({userDetails: {id, name, username, email}}) => {
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
        </div>
    );
};

export default UserDetailsComponent;