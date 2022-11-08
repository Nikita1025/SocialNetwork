import React from 'react';
import {UsersType} from "./UsersContainer";
import axios from "axios";

export const Users = (props: UsersType) => {
    let {usersPage, follow, unfollow, setUsers} =props
    if (usersPage.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            setUsers(response.data.items)
        })
    }
    return (
        <div>
            {usersPage.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoURL}/>
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
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
}