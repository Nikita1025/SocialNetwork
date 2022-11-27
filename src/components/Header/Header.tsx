import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderType = {
    isAuth: boolean
    login: null
}
const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <img
                src='https://e7.pngegg.com/pngimages/998/652/png-clipart-social-media-linkedin-computer-icons-social-network-font-awesome-elegant-business-card-angle-text.png'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header