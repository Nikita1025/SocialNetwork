import React from 'react';
import MyPost from "./MyPost";
import {connect} from "react-redux";
import { RootState} from "../../../Redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC} from "../../../Redux/profile-reducer";

type mapStateToPropsType={
        posts: Array<PostType>
}
type PostType ={
    id: number
    message: string
    likesCount: number
}
type mapDispatchToPropsType ={
    addPost:(newPostText: string)=>void
}
export type MyPostType = mapStateToPropsType & mapDispatchToPropsType
let mapStateToProps =(state:RootState):mapStateToPropsType=>{
    return{
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps =(dispatch:Dispatch):mapDispatchToPropsType=> {
    let newPostElements = React.createRef<HTMLTextAreaElement>();
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

const MypostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MypostContainer;