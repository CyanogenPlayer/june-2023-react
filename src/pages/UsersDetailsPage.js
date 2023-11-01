import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import UserDetails from "../components/UsersContainer/UserDetails";
import {userService} from "../services/userService";

const UsersDetailsPage = () => {
    const {userId} = useParams();

    const [user, setUser] = useState(null);

    useEffect(() => {
        userService.getById(userId).then(({data}) => setUser(data))
    }, [userId]);

    return (
        <div>
            {user && <UserDetails user={user}/>}
            <hr/>
            <Outlet/>
        </div>
    );
};

export default UsersDetailsPage;