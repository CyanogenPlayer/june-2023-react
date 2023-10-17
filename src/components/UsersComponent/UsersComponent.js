import React, {useEffect, useState} from 'react';

import UserComponent from "../UserComponent/UserComponent";

const UsersComponent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => setUsers(value))
    }, []);

    return (
        <div>
            {users.map(user => <UserComponent user={user} key={user.id}/>)}
        </div>
    );
};

export default UsersComponent;