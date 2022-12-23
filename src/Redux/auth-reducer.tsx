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
export type AuthInitialStateType = {
    id: string
    email: string
    login: string
    isAuth: boolean
}
export const authReducer = (state = initialState, action: ActionsTypesAuth): { isAuth: boolean; id: string; login: string; email: string } => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}
export type ActionsTypesAuth = SetUserDataACType

type SetUserDataACType = ReturnType<typeof SetUserDataAC>
export const SetUserDataAC = (id: string, email: string, login: string, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA',
        data: {id, email, login, isAuth}
    } as const
}

export const getAuthUserData = () => (dispatch: Dispatch<ActionsTypes>) => {
    return userAPI.header()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(SetUserDataAC(id, email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: ThunkDispatch<RootState, void, ActionsTypes>) => {

    loginAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message= response.data.messages.length > 0
                    ? response.data.messages[0]
                    : "Some error"
                stopSubmit('login', {_error:message})
            }
        })

}
export const logout = () => {
    return (dispatch: Dispatch<ActionsTypes>) => {
        loginAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(SetUserDataAC('', '', '', false))
                }
            })
    }
}