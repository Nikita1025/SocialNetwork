import React from 'react';
import {UsersType} from "./UsersContainer";
import axios from "axios";
import userPhoto from  '../../image/user.png'
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
                <span>
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
}