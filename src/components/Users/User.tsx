import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../image/user.png";
import {usersType} from "./UsersContainer";
import {NavLink} from 'react-router-dom';
import {Arr} from "../../Redux/user-reducer";
import {Paginator} from "../Comman/Paginator/Paginator";


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
        <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img style={{borderRadius: '50%', width: "100px", height: "100px"}}
                             src={user.photos.small !== null ? user.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed ? <button disabled={arr.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id)
                            }}>UnFollow</button> :

                            <button disabled={arr.some(id => id === user.id)} onClick={() => {
                                follow(user.id)
                            }}>Follow</button>}

                    </div>
                </span>
            <span className={s.name}>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"u"}</div>
                        <div>{"u"}</div>
                    </span>
                </span>
        </div>)
}


