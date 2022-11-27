import {combineReducers, legacy_createStore} from "redux";
import {profieReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./user-reducer";
import {authReducer} from "./auth-reducer";

let rootReducer = combineReducers({
    profilePage: profieReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export let store = legacy_createStore(rootReducer)
export type RootState = ReturnType<typeof store.getState>
export type LibStoreType = typeof store