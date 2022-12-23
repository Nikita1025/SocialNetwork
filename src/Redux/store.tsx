import {ActionTypesProfile} from "./profile-reducer";
import {ActionTypeDialog} from "./dialogs-reducer";
import {ActionTypeUser} from "./user-reducer";
import {ActionsTypesAuth} from "./auth-reducer";
import {ActionsTypesApp} from "./app-reducer";


export type ActionsTypes = ActionTypeDialog
    | ActionTypesProfile
    | ActionTypeUser
    | ActionsTypesAuth
    | ActionsTypesApp
// export type PostsType = {
//     id: number
//     message: string
//     likesCount: number
// }
// export type DialogType = {
//     id: number
//     name: string
// }
// export type MessageType = {
//     id: number
//     message: string
// }
//
// export type ProfilePageType = {
//     messageForNewPost: string
//     posts: PostsType[]
//
//
// }
//
// export type MessagesPageType = {
//     messages: MessageType[],
//     dialogs: DialogType[]
//     newMessageBody: string
// }
//
// export type RootStateType = {
//     profilePage: ProfilePageType,
//     messagesPage: MessagesPageType,
//
// }