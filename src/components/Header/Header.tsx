import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderType = {
    isAuth: boolean
    login: string
    logout:()=>void
}
const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <img
                src='https://e7.pngegg.com/pngimages/998/652/png-clipart-social-media-linkedin-computer-icons-social-network-font-awesome-elegant-business-card-angle-text.png'/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header