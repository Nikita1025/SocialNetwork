
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