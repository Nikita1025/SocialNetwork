import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../image/user.png";
import {usersType} from "./UsersContainer";
import { NavLink } from 'react-router-dom';
import axios from "axios";
import {Arr, followingInProgressAC} from "../../Redux/user-reducer";

type UsersComp = {
    users: Array<usersType>
    pageSize: number
    totalCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onClickHandler: (pageNumber: number) => void
    followingInProgressAC: (isFetching: boolean,userID: number)=>void
    arr: Arr[]
}
export const Users = (props: UsersComp) => {
    let {users, follow, unfollow, onClickHandler, pageSize, currentPage, totalCount, followingInProgressAC} = props
    let pageCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (

        <div>
            <div className={s.page}>
                {pages.map(el => {
                    return <span onClick={(event) => {
                        onClickHandler(el)
                    }}
                                 className={currentPage === el ? s.selectorPage : undefined}>{el}</span>
                })}
            </div>
            {users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img style={{borderRadius: '50%', width: "100px", height: "100px"}}
                             src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button disabled={props.arr.some(id=> id === u.id)} onClick={() => {
                            followingInProgressAC(true, u.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/`,{
                                    withCredentials: true,
                                    headers:{
                                        'API-KEY': '0d75c48f-9e63-470b-9ad9-a9bece9db405'
                                    }
                                })
                                    .then(response => {
                                        if(response.data.resultCode===0){
                                            unfollow(u.id)
                                        }
                                        followingInProgressAC(false,u.id)
                                    })

                            }}>UnFollow</button> :

                            <button disabled={props.arr.some(id=> id === u.id)} onClick={() => {
                                followingInProgressAC(true, u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                    withCredentials: true,
                                    headers:{
                                        'API-KEY': '0d75c48f-9e63-470b-9ad9-a9bece9db405'
                                    }
                                })
                                    .then(response => {
                                        if(response.data.resultCode===0){
                                         follow(u.id)
                                        }
                                        followingInProgressAC(false, u.id)
                                    })

                            }}>Follow</button>}

                    </div>
                </span>
                <span className={s.name}>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u"}</div>
                        <div>{"u"}</div>
                    </span>
                </span>
            </div>)}
        </div>

    );
};

