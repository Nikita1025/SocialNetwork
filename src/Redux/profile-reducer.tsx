import {ActionsTypes, PostsType} from "./store";
export let initialState = {
    messageForNewPost: "",
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 12},
        {id: 2, message: "Its, my first post", likesCount: 11}
    ]
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
        default:
            return state
    }
}