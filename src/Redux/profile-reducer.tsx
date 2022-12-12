import { PostsType} from "./store";
import {Dispatch} from "redux";
import axios from "axios";
import {profileAPI, userAPI} from "../api/api";
export let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 12},
        {id: 2, message: "Its, my first post", likesCount: 11}
    ],
    profile: {
        aboutMe: "",
        contacts: {
            facebook: "",
            website: null,
            vk: "",
            twitter: "",
            instagram: "",
            youtube: null,
            github: "",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "",
        fullName: "",
        userId: 2,
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        },
    },
    status: ""
}
export type ProfileInitialStateType={
    aboutMe: string
    contacts:{
        facebook: string
        website: null,
        vk: string
        twitter: string
        instagram: string
        youtube: null,
        github: string
        mainLink: null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
export const profieReducer = (state= initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostsType = {
                id: 5,
                message: action.newPostText,
                likesCount: 10
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case 'SET_USER_PROFILE':{
            return {...state, profile: action.profile}
        }
        case "SET-STATUS":{
            return {...state, status:action.status}
        }
        default:
            return state
    }
}
type ActionsTypes = AddPostActionType
    |newMessageBodyType | SendMessageType
    |setUserProfileType | setStatusType
type AddPostActionType = ReturnType<typeof addPostAC>
type newMessageBodyType = ReturnType<typeof newMessageBodyAC>
type SendMessageType = ReturnType<typeof SandMessageAC>
type setUserProfileType = ReturnType<typeof setUserProfile>
type setStatusType=ReturnType<typeof setStatus>
export const SandMessageAC=()=>{
    return{
        type:'SEND-MESSAGE'
    }as const
}

export const newMessageBodyAC = (body:string) => {
    return {
        type: 'UPPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const

}
export const addPostAC = (newPostText:string) => {
    return {
        type: 'ADD-POST',
        newPostText

    } as const
}
export const setUserProfile = (profile: ProfileInitialStateType)=>{
    return{
        type: "SET_USER_PROFILE",
        profile
    }as const
}
export const setStatus =(status: string)=>{
    return{
        type: "SET-STATUS",
        status
    }as const
}
export const ProfileThunk =(userId: number)=>{
    return (dispatch: Dispatch<ActionsTypes>)=>{
       userAPI.profile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}
export const getStatusThunk =(userId: number)=>{
    return (dispatch: Dispatch<ActionsTypes>)=>{
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}
export const updateStatusThunk =(status: string)=>{
    return (dispatch: Dispatch<ActionsTypes>)=>{
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode===0){
                    dispatch(setStatus(status))
                }

            })
    }
}