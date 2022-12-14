import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
const Nav = () =>{
    return(
        <nav className={s.nav}>
            <div className={s.item} style={{marginBottom: '15px'}}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item} style={{marginBottom: '15px'}} >
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item} style={{marginBottom: '15px'}}>
                <NavLink to={"/users"} activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item} style={{marginBottom: '15px'}}>
                <a>News</a>
            </div>
            <div className={s.item} style={{marginBottom: '15px'}}>
                <a>Music</a>
            </div>
            <div className={s.item} style={{marginBottom: '15px'}}>
                <a>Settings </a>
            </div>
        </nav>
    )
}
export default Nav;