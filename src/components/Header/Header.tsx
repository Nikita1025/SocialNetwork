import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import s from './Header.module.css'
import {Nav} from "../Nav/Nav";
import {NavLink} from "react-router-dom";

type HeaderType = {
    isAuth: boolean
    login: string
    logout: () => void
    ava: string
}

export function Header(props: HeaderType) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{flexGrow: 1}} className={s.container}>
            <AppBar position="static" >
                <Toolbar className={s.appContainer}>

                    <div>
                        <img className={s.img}
                             src={'https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/11/logo_light.svg'}/>

                    </div>
                    <Nav/>

                    {props.isAuth && (
                        <div className={s.loginBlock}>
                            <p className={s.p}>{props.login}</p>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >

                                <AccountCircle type={props.ava}/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={props.logout}>Log out</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
        // <header>
        //     <div>
        //         <div>
        //
        //             <img className={s.img}
        //                  src={'https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/11/logo_light.svg'}/>
        //         </div>
        //
        //
        //         <Nav/>
        //
        //         <div>
        //             {props.isAuth
        //                 ? <div>
        //                     <span>{props.login}</span>
        //                 </div>
        //                 : <NavLink to={'/login'}>
        //                     Login
        //                 </NavLink>}
        //
        //         </div>
        //     </div>
        // </header>
    );
}