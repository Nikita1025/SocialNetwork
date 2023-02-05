import React from 'react';
import s from './Post.module.css'

import {Avatar} from "@mui/material";
import {PostsType} from "../../../../Redux/profile-reducer";
import user from '../../../../image/user.png'
import {useSelector} from "react-redux";
import {RootState} from "../../../../Redux/redux-store";


const Post = (props: PostsType) => {
    const userName=useSelector<RootState, string>(state => state.profilePage.profile.fullName)
    return (

            <div className={s.cont}>
                <div className={s.name}>
                    <Avatar
                        alt="Remy Sharp"
                        src={user}
                        sx={{width: 56, height: 56}}
                    />
                    <span>{userName}</span>
                </div>
                <div className={s.span}>
                    <div>{props.message}</div>
                    <span>Like {props.likesCount}</span>
                </div>
            </div>


    )
}
export default Post;