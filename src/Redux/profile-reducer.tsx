import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
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

export const profileReducer = (state = initialState, action: ActionTypesProfile) => {
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
        case 'SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        case "SET-STATUS": {
            return {...state, status: action.status}
        }
        case "DELETE-POST": {
            return {...state, posts: state.posts.filter(el => el.id === action.id)}
        }
        default:
            return state
    }
}

//actions
export const SandMessageAC = () => ({type: 'SEND-MESSAGE'} as const)
export const newMessageBodyAC = (body: string) => ({type: 'UPDATE-NEW-MESSAGE-BODY', body: body} as const)
export const addPostAC = (newPostText: string) => ({type: 'ADD-POST', newPostText} as const)
export const setUserProfile = (profile: ProfileInitialStateType) => ({type: "SET_USER_PROFILE", profile} as const)
export const setStatus = (status: string) => ({type: "SET-STATUS", status} as const)
export const deletePostAC = (id: number) => ({type: 'DELETE-POST', id} as const)

//thunks
export const ProfileThunk = (userId: number) =>
    async (dispatch: Dispatch<ActionsTypes>) => {
        const res = await userAPI.profile(userId)
        dispatch(setUserProfile(res.data))
    }

export const getStatusThunk = (userId: number) =>
    async (dispatch: Dispatch<ActionsTypes>) => {
        const res = await profileAPI.getStatus(userId)
        dispatch(setStatus(res.data))

    }
export const updateStatusThunk = (status: string) =>
    async (dispatch: Dispatch<ActionsTypes>) => {
        const res = await profileAPI.updateStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
        }

    }

//types
export type ActionTypesProfile = AddPostActionType
    | newMessageBodyType | SendMessageType
    | setUserProfileType | setStatusType
    | ReturnType<typeof deletePostAC>
type AddPostActionType = ReturnType<typeof addPostAC>
type newMessageBodyType = ReturnType<typeof newMessageBodyAC>
type SendMessageType = ReturnType<typeof SandMessageAC>
type setUserProfileType = ReturnType<typeof setUserProfile>
type setStatusType = ReturnType<typeof setStatus>
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type initialStateType = {
    posts: Array<PostsType>
    profile: ProfileInitialStateType
    status: string
}

export type ProfileInitialStateType = {
    aboutMe: string
    contacts: {
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