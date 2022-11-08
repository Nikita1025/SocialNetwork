import React from 'react';
import s from './Mypost.module.css'
import Post from './post/Post';
import {MyPostType} from "./Mypostcontainer";
import SendIcon from '@mui/icons-material/Send';
import {Button, TextField} from "@mui/material";

const MyPost = (props: MyPostType) => {
    let postElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)
    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.addContent}>
                <div>
                    <TextField id="outlined-basic" label="My Post" variant="outlined"
                               style={{borderColor: "white"}}
                               onChange={(e) => {
                                   props.onChangeNewText(e.currentTarget.value)
                               }} value={props.messageForNewPost}/>
                </div>
                <div>
                    <SendIcon style={{marginLeft: '10px'}} onClick={props.addPost}/>
                </div>

            </div>
            <div className={s.posts}>
                {postElements}
            </div>

        </div>

    )
}
export default MyPost;