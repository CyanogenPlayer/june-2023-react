import React, {useEffect, useState} from 'react';

import css from './Users.module.css';
import UserComponent from "../user/UserComponent";
import {userService} from "../../services/userService";
import UserDetailsComponent from "../userDetails/UserDetailsComponent";

const UsersComponent = () => {
    const [users, setUsers] = useState([])
    const [userDetails, setUserDetails] = useState(null)

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(value => value.json())
        //     .then(value => setUsers(value))
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    const click = async (userId) => {
        const {data} = await userService.getById(userId);
        setUserDetails(data)
    };

    return (

        <div>
            <div className={css.Users}>
                {users.map(user => <UserComponent key={user.id} user={user} click={click}/>)}
            </div>
            {
                userDetails && <UserDetailsComponent userDetails={userDetails}/>
            }
        </div>
    );
};

export default UsersComponent;