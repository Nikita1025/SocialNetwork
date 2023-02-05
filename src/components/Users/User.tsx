import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../image/user.png";
import {usersType} from "./UsersContainer";
import {NavLink} from 'react-router-dom';
import {Arr} from "../../Redux/user-reducer";
import {Paginator} from "../Comman/Paginator/Paginator";
import HeaderContainer from "../Header/HeaderContainer";
import Nav from "../Nav/Nav";
import Button from "@mui/material/Button";


type UsersComp = {
    user: usersType
    pageSize: number
    totalCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onClickHandler: (pageNumber: number) => void
    arr: Arr[]
}
export const User: React.FC<UsersComp> = ({
                                              user,
                                              follow,
                                              unfollow,
                                              onClickHandler,
                                              pageSize,
                                              currentPage,
                                              totalCount,
                                              arr
                                          }) => {
    return (
        <div className={s.containerUser}>

                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img style={{borderRadius: '50%', width: "100px", height: "100px"}}
                             src={user.photos.small !== null ? user.photos.small : userPhoto}/>
                        </NavLink>
                    </div>

                </span>
            <span >
                    <span className={s.contSpan}>
                        <div className={s.name}>{user.name}</div>
                        <div>Status: {user.status}</div>
                    </span>
                </span>
            <div>
                {user.followed ? <Button disabled={arr.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)
                    }}>UnFollow</Button> :

                    <Button variant='outlined' disabled={arr.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }}>Follow</Button>}

            </div>
        </div>)
}


