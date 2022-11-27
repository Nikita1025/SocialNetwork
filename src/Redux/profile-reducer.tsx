import { PostsType} from "./store";
export let initialState = {
    messageForNewPost: "",
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
        }
    }
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
                message: state.messageForNewPost,
                likesCount: 10
            }
            return {
                ...state,
                messageForNewPost: '',
                posts: [...state.posts, newPost]
            }
        }
        case 'ON-CHANGE-NEW-TEXT':{
            return {
                ...state,
                messageForNewPost:action.NewText
            }
            }
        case 'SET_USER_PROFILE':{
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}
type ActionsTypes = AddPostActionType | ChangeNewTextActionType |newMessageBodyType | SendMessageType |setUserProfileType
type AddPostActionType = ReturnType<typeof addPostAC>
type ChangeNewTextActionType = ReturnType<typeof ChangeNewTextActionAC>
type newMessageBodyType = ReturnType<typeof newMessageBodyAC>
type SendMessageType = ReturnType<typeof SandMessageAC>
type setUserProfileType = ReturnType<typeof setUserProfile>
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
export const addPostAC = () => {
    return {
        type: 'ADD-POST'

    } as const
}
export const ChangeNewTextActionAC = (NewText: string) => {
    return {
        type: 'ON-CHANGE-NEW-TEXT',
        NewText: NewText

    } as const
}
export const setUserProfile = (profile: ProfileInitialStateType)=>{
    return{
        type: "SET_USER_PROFILE",
        profile
    }as const
}