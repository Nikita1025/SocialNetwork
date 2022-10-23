import {combineReducers, createStore} from "redux";
import {profieReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./user-reducer";

let rootReducer = combineReducers({
    profilePage: profieReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer
})

export let store = createStore(rootReducer)
export type RootState = ReturnType<typeof store.getState>
export type LibStoreType = typeof store