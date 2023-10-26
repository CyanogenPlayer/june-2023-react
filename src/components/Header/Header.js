import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';


const Header = () => {
    return (
        <div>
            <div className={css.Header}>
                <NavLink to={"todos"}>todos</NavLink>
                <NavLink to={"albums"}>albums</NavLink>
                <NavLink to={"comments"}>comments</NavLink>
            </div>
        </div>
    );
};

export default Header;