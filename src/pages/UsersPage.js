import React from 'react';
import {Outlet} from "react-router-dom";

import Users from "../components/UsersContainer/Users";


const UsersPage = () => {
    return (
        <div>
            <Users/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;