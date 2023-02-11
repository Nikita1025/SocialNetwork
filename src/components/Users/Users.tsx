import React from 'react';
import {usersType} from "./UsersContainer";
import {Arr} from "../../Redux/user-reducer";
import {Paginator} from "../Comman/Paginator/Paginator";
import {User} from "./User";

import s from './Users.module.css'
import {Nav} from "../Nav/Nav";

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
export const Users: React.FC<UsersComp> = ({
                                               users,
                                               follow,
                                               unfollow,
                                               onClickHandler,
                                               pageSize,
                                               currentPage,
                                               totalCount,
                                               arr,

                                           }) => {
    return (
        <div>
            <Nav/>
            <div className={s.container}>
                <Paginator onPageChanged={onClickHandler} totalCount={totalCount} currentPage={currentPage}
                           pageSize={pageSize} />
                {users.map(u => <User user={u} key={u.id} arr={arr} pageSize={pageSize} currentPage={currentPage}
                                      onClickHandler={onClickHandler} totalCount={totalCount} follow={follow}
                                      unfollow={unfollow}/>)}
            </div>

        </div>

    );
};

