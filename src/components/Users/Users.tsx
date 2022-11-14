import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../image/user.png";
import {usersType} from "./UsersContainer";

type UsersComp = {
    users: Array<usersType>
    pageSize: number
    totalCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onClickHandler:(pageNumber: number)=>void
}
export const Users = (props: UsersComp) => {
    let {users, follow, unfollow,onClickHandler, pageSize, currentPage, totalCount} = props
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
                        <img style={{borderRadius: '50%', width: "100px", height: "100px"}}
                             src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                unfollow(u.id)
                            }}>UnFollow</button> :
                            <button onClick={() => {
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

