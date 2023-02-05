import {useDispatch, useSelector} from "react-redux";

export default Header
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
import {RootState} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";
type HeaderType = {
    isAuth: boolean
    login: string
    logout:()=>void
    ava: string
}
export function Header(props: HeaderType) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isAuth= useSelector<RootState>(state => state.auth.isAuth)
    const dispatch=useDispatch()
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const onClick=()=>{
        dispatch(props.logout())
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
    // if(isAuth){
    //     return <Redirect to={'/login'}/>
    // }
    return (
        <Box sx={{ flexGrow: 1 }} className={s.container}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <img className={s.img} src={'https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/2021/11/logo_light.svg'}/>
                    </Typography>
                    {props.isAuth && (
                        <div className={s.loginBlock}>
                            <p>{props.login}</p>
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
                                <MenuItem onClick={onClick}>Log out</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}