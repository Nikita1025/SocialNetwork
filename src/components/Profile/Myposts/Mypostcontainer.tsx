import React from 'react';
import { addPostAC, ChangeNewTextActionAC} from "../../../Redux/store";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {LibStoreType, RootState} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType={
        posts: Array<PostType>
        messageForNewPost:string
}
type PostType ={
    id: number
    message: string
    likesCount: number
}
type mapDispatchToPropsType ={
    addPost:()=>void
    onChangeNewText:(NewText: string)=>void
}
export type MyPostType = mapStateToPropsType & mapDispatchToPropsType
let mapStateToProps =(state:RootState):mapStateToPropsType=>{
    return{
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}
let mapDispatchToProps =(dispatch:Dispatch):mapDispatchToPropsType=>{
    let newPostElements = React.createRef<HTMLTextAreaElement>();
    return{
        addPost:()=>{
            dispatch(addPostAC())
        },
        onChangeNewText:(NewText: string)=>{
            if (newPostElements.current) {
                let text = newPostElements.current?.value

            }

            dispatch(ChangeNewTextActionAC(NewText))

        }
        }
    }

const MypostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MypostContainer;