import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

export const Nav = () =>{
    return(
        <div className={s.container}>
            <ul className={s.ul}>
                <li className={s.li} >
                    <NavLink to={'/profile'} className={s.a}>Profile</NavLink>
                </li>
                <li className={s.li}>
                    <NavLink to={'/dialogs'} className={s.a}>Messages</NavLink>
                </li>
                <li className={s.li} >
                    <NavLink to={'/users'} className={s.a}>Users</NavLink>
                </li>
            </ul>
        </div>

    )
}