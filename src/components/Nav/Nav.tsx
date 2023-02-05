import React from 'react';
import s from './Nav.module.css';

const Nav = () =>{
    return(
        <div className={s.container}>
            <ul className={s.ul}>
                <li className={s.li} >
                    <a href="/profile" className={s.a}>Profile</a>
                </li>
                <li className={s.li}>
                    <a href="/dialogs" className={s.a}>Messages</a>
                </li>
                <li className={s.li} >
                    <a href="/users" className={s.a}>Users</a>
                </li>
            </ul>
        </div>

    )
}
export default Nav;