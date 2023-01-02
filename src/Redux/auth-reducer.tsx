import {Dispatch} from "redux";
import {loginAPI, userAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ActionsTypes} from "./store";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "./redux-store";

export let initialState = {
    id: '',
    email: '',
    login: '',
    isAuth: false,
}

export const authReducer = (state = initialState, action: ActionsTypesAuth): { isAuth: boolean; id: string; login: string; email: string } => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}
//action
export const SetUserDataAC = (id: string, email: string, login: string, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA',
        data: {id, email, login, isAuth}
    } as const
}
//thunks
export const getAuthUserData = () => async (dispatch: Dispatch<ActionsTypes>) => {
    let res = await userAPI.header()
    if (res.data.resultCode === 0) {
        let {id, email, login} = res.data.data
        dispatch(SetUserDataAC(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean) =>
    async (dispatch: ThunkDispatch<RootState, void, ActionsTypes>) => {
        const res = await loginAPI.login(email, password, rememberMe)
        if (res.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = res.data.messages.length > 0
                ? res.data.messages[0]
                : "Some error"
            stopSubmit('login', {_error: message})
        }
    }

export const logout = () =>
    async (dispatch: Dispatch<ActionsTypes>) => {
        const res = await loginAPI.logout()
        if (res.data.resultCode === 0) {
            dispatch(SetUserDataAC('', '', '', false))
        }
    }
//types
export type ActionsTypesAuth = ReturnType<typeof SetUserDataAC>

export type AuthInitialStateType = {
    id: string
    email: string
    login: string
    isAuth: boolean
}