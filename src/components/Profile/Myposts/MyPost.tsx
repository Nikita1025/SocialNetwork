import React from 'react';
import s from './Mypost.module.css'
import Post from './post/Post';

import {MyPostType} from "./Mypostcontainer";

const MyPost = (props: MyPostType) => {
    let postElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)
    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea onChange={(e)=>{props.onChangeNewText(e.currentTarget.value)}} value={props.messageForNewPost}></textarea></div>

                <div>
                    <button onClick={props.addPost}>App posts</button>
                </div>

            </div>
            <div className={s.posts}>

                {postElements}
            </div>

        </div>

    )
}
export default MyPost;