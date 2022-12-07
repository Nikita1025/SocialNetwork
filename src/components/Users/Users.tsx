import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../image/user.png";
import {usersType} from "./UsersContainer";
import {NavLink} from 'react-router-dom';
import {Arr} from "../../Redux/user-reducer";


type UsersComp = {
    users: Array<usersType>
    pageSize: number
    totalCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onClickHandler: (pageNumber: number) => void
    arr: Arr[]
}
export const Users = (props: UsersComp) => {
    let {users, follow, unfollow, onClickHandler, pageSize, currentPage, totalCount} = props
    let pageCount = Math.ceil(totalCount / pageSize)
    let pages = []
    for (let i = 1; i <= 20; i++) {
        pages.push(i)
    }

    return (

        <div>
            <div className={s.page}>
                {pages.map((el,index) => {
                    return<span key={index} onClick={(event) => {
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
                        {u.followed ? <button disabled={props.arr.some(id => id === u.id)} onClick={() => {
                                unfollow(u.id)
                            }}>UnFollow</button> :

                            <button disabled={props.arr.some(id => id === u.id)} onClick={() => {
                                follow(u.id)
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

