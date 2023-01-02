import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../image/user.png";
import {usersType} from "./UsersContainer";
import {NavLink} from 'react-router-dom';
import {Arr} from "../../Redux/user-reducer";
import {Paginator} from "../Comman/Paginator/Paginator";
import {User} from "./User";


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
                                               arr
                                           }) => {
    return (
        <div>
            <Paginator onClickHandler={onClickHandler} totalCount={totalCount} currentPage={currentPage}
                       pageSize={pageSize}/>
            {users.map(u => <User user={u} key={u.id} arr={arr} pageSize={pageSize} currentPage={currentPage}
                                  onClickHandler={onClickHandler} totalCount={totalCount} follow={follow}
                                  unfollow={unfollow}/>)}
        </div>

    );
};

