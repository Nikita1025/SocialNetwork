import {ActionsTypes} from "./store";


let initialState = {
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
        {id: 5, name: "Vicktor"},
        {id: 6, name: "Nikita"}
    ]
}
export type MessagesPageType = {
    messages: MessageType[],
    dialogs: DialogType[]
}

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

export const dialogsReducer = (state = initialState, action: ActionsTypes) => {
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