import React from 'react';

import {UsersType} from "./UsersContainer";

export const Users = (props: UsersType) => {
    let {usersPage, follow, unfollow} = props
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