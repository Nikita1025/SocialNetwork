import React from 'react';
import {connect} from "react-redux";
import {LibStoreType, RootState} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {followAC, unfollowAC } from "../../Redux/user-reducer";
import {Users} from "./Users";

type mapStateToPropsType ={
    usersPage: Array<usersType>
}
export type usersType = {
    id: number
    photoURL: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string
        country: string
    }
}
type mapDispatchToPropsType ={
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
}
export type UsersType = mapStateToPropsType & mapDispatchToPropsType
let mapStateToProps = (state: RootState):mapStateToPropsType => {
    return {
        usersPage: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        follow: (userId: number)=>{
            dispatch(followAC(userId))
        },
        unfollow: (userId: number)=>{
            dispatch(unfollowAC(userId))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)
