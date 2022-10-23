import {profieReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

export let store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: "",
            posts: [
                {id: 1, message: "Hi, how are you", likesCount: 12},
                {id: 2, message: "Its, my first post", likesCount: 11}
            ]


        },
        messagesPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is you"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"}
            ],
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Ignat"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Igor"},
                {id: 5, name: "Vicktor"}
            ],
            newMessageBody: ""
        },

    },
    subscribe(callback) {
        this._onChange = callback;
    },
    _onChange() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        this._state.profilePage= profieReducer(this._state.profilePage, action)
        this._state.messagesPage= dialogsReducer(this._state.messagesPage, action)

      this._onChange()
    }
}
type AddPostActionType = ReturnType<typeof addPostAC>
type ChangeNewTextActionType = ReturnType<typeof ChangeNewTextActionAC>
type newMessageBodyType = ReturnType<typeof newMessageBodyAC>
type SendMessageType = ReturnType<typeof SandMessageAC>
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
export const addPostAC = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        postMessage: postMessage
    } as const
}
export const ChangeNewTextActionAC = (NewText: string) => {
    return {
        type: 'ON-CHANGE-NEW-TEXT',
        NewText: NewText

    } as const
}
export type StoreType = {
    _state: RootStateType
    subscribe: (callback: () => void) => void
    _onChange: () => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void

}


export type ActionsTypes = AddPostActionType | ChangeNewTextActionType |newMessageBodyType | SendMessageType
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    messageForNewPost: string
    posts: PostsType[]


}

export type MessagesPageType = {
    messages: MessageType[],
    dialogs: DialogType[]
    newMessageBody: string
}

export type RootStateType = {
    profilePage: ProfilePageType,
    messagesPage: MessagesPageType,

}