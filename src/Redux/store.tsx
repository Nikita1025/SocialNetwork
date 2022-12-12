
type ChangeNewTextActionType = ReturnType<typeof ChangeNewTextActionAC>
type SendMessageType = ReturnType<typeof SandMessageAC>
export const SandMessageAC=(newMessageBody:string)=>{
    return{
        type:'SEND-MESSAGE',
        newMessageBody
    }as const
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


export type ActionsTypes =  ChangeNewTextActionType  | SendMessageType
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