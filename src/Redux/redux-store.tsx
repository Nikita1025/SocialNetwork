import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {profieReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./user-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";


let rootReducer = combineReducers({
    profilePage: profieReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export let store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type RootState = ReturnType<typeof store.getState>
export type LibStoreType = typeof store