import React from 'react';
import s from './Post.module.css'
import {PostsType} from "../../../../Redux/store";
import {Avatar} from "@mui/material";



const Post = (props: PostsType) => {
    return (

            <div className={s.item}>
                <Avatar
                    alt="Remy Sharp"
                    src="https://play-lh.googleusercontent.com/69DEGMGZWRsrGy6AyIZ3k8xJGMGXHfr6jzn63IBBcyD3CgyixnmRZIfMf0QrbdWUQTBg=w240-h480-rw"
                    sx={{width: 56, height: 56}}
                />
                <div>{props.message}</div>
                <div className={s.span}>
                    <span>Like {props.likesCount}</span>
                </div>
            </div>


    )
}
export default Post;