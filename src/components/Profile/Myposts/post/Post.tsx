import React from 'react';
import s from './Post.module.css'
import {PostsType} from "../../../../Redux/store";



const Post = (props: PostsType)=> {
    return (
        <div className={s.item}>
            <img
                src='https://play-lh.googleusercontent.com/69DEGMGZWRsrGy6AyIZ3k8xJGMGXHfr6jzn63IBBcyD3CgyixnmRZIfMf0QrbdWUQTBg=w240-h480-rw'/>
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>


        </div>


    )
}
export default Post;