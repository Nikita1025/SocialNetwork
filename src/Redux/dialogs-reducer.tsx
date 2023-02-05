import user1 from '../image/user1.jpg'
import user2 from '../image/user2.png'
import user3 from '../image/194938.png'

let initialState = {
    messages: [
        {id: 1, message: "Hi", avatar:user1},
        {id: 2, message: "How is you", avatar:user1},
        {id: 3, message: "Yo", avatar:user1},
    ],
    dialogs: [
        {id: 1, name: "Dimych", avatar:user1},
        {id: 2, name: "Ignat", avatar:user2},
        {id: 3, name: "Sveta", avatar:user3},
    ]
}
export type MessagesPageType = {
    messages: MessageType[],
    dialogs: DialogType[]
}

type DialogType = {
    id: number
    name: string
    avatar: string
}
type MessageType = {
    id: number
    message: string
    avatar: string
}

export const dialogsReducer = (state = initialState, action: ActionTypeDialog) => {
    switch (action.type) {
        case'SEND-MESSAGE': {
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            }

        }
        default:
            return state
    }
}

export type ActionTypeDialog = ChangeNewTextActionType | SendMessageType
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
