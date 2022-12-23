import React from 'react';
import s from './Mypost.module.css'
import Post from './post/Post';
import {MyPostType} from "./Mypostcontainer";
import {AddNewPostReduxForm, FormDataType} from "../../Comman/FormProfile";
import {maxLengthCreator, required} from '../../../utils/validators/validators';

const MyPost = (props: MyPostType) => {
    let postElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)
    let onAddPost=(values:FormDataType)=>{
        props.addPost(values.newPostText)
    }
    return (

        <div className={s.postsBlock}>
            <h3 className={s.post}>My Post</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}
            />
            <div className={s.posts}>
                {postElements}
            </div>


        </div>
    )
}
export default MyPost;